import type { ApiRequest, ApiResponse } from "../server/http";
import { getBearerToken } from "../server/http";
import { getDatabase } from "../server/database";

const csvCell = (value: unknown) => `"${String(value ?? "").replaceAll('"', '""')}"`;

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (!process.env.EXPORT_SECRET || getBearerToken(request) !== process.env.EXPORT_SECRET) {
    return response.status(401).json({ message: "Accès refusé." });
  }

  try {
    const sql = getDatabase();
    const rows = await sql`
      select email, status, consented_at, confirmed_at, consent_withdrawn_at,
             utm_source, utm_medium, utm_campaign, created_at, updated_at
      from bio_subscribers
      order by created_at desc
    `;
    const headers = ["email", "status", "consented_at", "confirmed_at", "consent_withdrawn_at", "utm_source", "utm_medium", "utm_campaign", "created_at", "updated_at"];
    const csv = [headers.join(","), ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))].join("\n");
    response.setHeader("Content-Type", "text/csv; charset=utf-8");
    response.setHeader("Content-Disposition", 'attachment; filename="synapse-subscribers.csv"');
    return response.status(200).send(csv);
  } catch (error) {
    console.error("Export error", error);
    return response.status(503).json({ message: "L’export est momentanément indisponible." });
  }
}
