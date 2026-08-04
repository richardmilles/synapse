import type { ApiRequest, ApiResponse } from "../server/http";
import { getDatabase } from "../server/database";
import { hashToken } from "../server/tokens";

export default async function handler(request: ApiRequest, response: ApiResponse) {
  const rawToken = request.query?.token;
  const token = Array.isArray(rawToken) ? rawToken[0] : rawToken;

  if (!token) return response.status(400).send("Lien de désinscription invalide.");

  try {
    const sql = getDatabase();
    const result = await sql`
      update bio_subscribers
      set status = 'unsubscribed', consent_withdrawn_at = now(), updated_at = now()
      where unsubscribe_token_hash = ${hashToken(token)}
      returning id
    `;
    if (result.length === 0) return response.status(400).send("Ce lien de désinscription est invalide.");
    return response.status(200).send("Votre désinscription a bien été prise en compte.");
  } catch (error) {
    console.error("Unsubscribe error", error);
    return response.status(503).send("La désinscription est momentanément indisponible.");
  }
}
