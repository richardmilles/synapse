import type { ApiRequest, ApiResponse } from "../server/http";
import { readJsonBody } from "../server/http";
import { getDatabase } from "../server/database";
import { createToken, hashToken } from "../server/tokens";

type SubscribeBody = {
  email?: string;
  consent?: boolean;
  company?: string;
  doubleOptIn?: boolean;
  attribution?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    referrer?: string;
  };
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ message: "Méthode non autorisée." });
  }

  const body = readJsonBody<SubscribeBody>(request.body);
  const email = body?.email?.trim().toLowerCase() || "";

  if (body?.company) return response.status(200).json({ ok: true });
  if (!EMAIL_PATTERN.test(email)) return response.status(400).json({ message: "Saisissez une adresse email valide." });
  if (!body?.consent) return response.status(400).json({ message: "Le consentement est nécessaire pour vous inscrire." });
  if (body.doubleOptIn && !process.env.NEWSLETTER_WEBHOOK_URL) {
    return response.status(503).json({ message: "L’envoi de l’email de confirmation doit encore être configuré." });
  }

  try {
    const sql = getDatabase();
    const confirmationToken = createToken();
    const unsubscribeToken = createToken();
    const status = body.doubleOptIn ? "pending" : "active";

    await sql`
      insert into bio_subscribers (
        email, status, consented_at, consent_source, utm_source, utm_medium,
        utm_campaign, utm_content, referrer, confirmation_token_hash,
        unsubscribe_token_hash, updated_at
      ) values (
        ${email}, ${status}, now(), 'bio_form', ${body.attribution?.source || "direct"},
        ${body.attribution?.medium || "bio"}, ${body.attribution?.campaign || null},
        ${body.attribution?.content || null}, ${body.attribution?.referrer || null},
        ${body.doubleOptIn ? hashToken(confirmationToken) : null}, ${hashToken(unsubscribeToken)}, now()
      )
      on conflict (email) do update set
        status = excluded.status,
        consented_at = now(),
        consent_withdrawn_at = null,
        utm_source = excluded.utm_source,
        utm_medium = excluded.utm_medium,
        utm_campaign = excluded.utm_campaign,
        utm_content = excluded.utm_content,
        referrer = excluded.referrer,
        confirmation_token_hash = excluded.confirmation_token_hash,
        unsubscribe_token_hash = excluded.unsubscribe_token_hash,
        updated_at = now()
    `;

    const publicUrl = process.env.PUBLIC_SITE_URL || "https://www.synapse-lab.co";
    const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookResponse = await globalThis.fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.NEWSLETTER_WEBHOOK_SECRET
            ? { Authorization: `Bearer ${process.env.NEWSLETTER_WEBHOOK_SECRET}` }
            : {}),
        },
        body: JSON.stringify({
          event: body.doubleOptIn ? "subscriber.pending" : "subscriber.active",
          email,
          confirmationUrl: body.doubleOptIn
            ? `${publicUrl}/api/confirm?token=${confirmationToken}`
            : undefined,
          unsubscribeUrl: `${publicUrl}/api/unsubscribe?token=${unsubscribeToken}`,
        }),
      });

      if (!webhookResponse.ok) {
        console.error("Newsletter webhook failed", webhookResponse.status);
        if (body.doubleOptIn) {
          return response.status(503).json({ message: "L’email de confirmation n’a pas pu être envoyé. Réessayez dans un instant." });
        }
      }
    }

    return response.status(201).json({ ok: true, doubleOptIn: Boolean(body.doubleOptIn) });
  } catch (error) {
    console.error("Subscription error", error);
    const message = error instanceof Error && error.message === "DATABASE_NOT_CONFIGURED"
      ? "La base d’inscription doit encore être configurée."
      : "L’inscription est momentanément indisponible.";
    return response.status(503).json({ message });
  }
}
