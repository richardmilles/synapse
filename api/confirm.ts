import type { ApiRequest, ApiResponse } from "../server/http";
import { getDatabase } from "../server/database";
import { hashToken } from "../server/tokens";

export default async function handler(request: ApiRequest, response: ApiResponse) {
  const rawToken = request.query?.token;
  const token = Array.isArray(rawToken) ? rawToken[0] : rawToken;
  const publicUrl = process.env.PUBLIC_SITE_URL || "https://www.synapse-lab.co";

  if (!token) return response.status(400).send("Lien de confirmation invalide.");

  try {
    const sql = getDatabase();
    const result = await sql`
      update bio_subscribers
      set status = 'active', confirmed_at = now(), confirmation_token_hash = null, updated_at = now()
      where confirmation_token_hash = ${hashToken(token)} and status = 'pending'
      returning id
    `;
    if (result.length === 0) return response.status(400).send("Ce lien de confirmation est invalide ou a déjà été utilisé.");
    response.status(302);
    response.setHeader("Location", `${publicUrl}/bio/merci?confirmed=1`);
    return response.end();
  } catch (error) {
    console.error("Confirmation error", error);
    return response.status(503).send("La confirmation est momentanément indisponible.");
  }
}
