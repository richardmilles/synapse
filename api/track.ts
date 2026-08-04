import type { ApiRequest, ApiResponse } from "../server/http";
import { readJsonBody } from "../server/http";
import { getDatabase } from "../server/database";

type TrackBody = {
  eventName?: string;
  path?: string;
  sessionId?: string;
  occurredAt?: string;
  attribution?: Record<string, string>;
  properties?: Record<string, string | number | boolean>;
};

const ALLOWED_EVENTS = new Set([
  "page_view",
  "link_click",
  "social_click",
  "offers_click",
  "booking_click",
  "youtube_click",
  "newsletter_signup",
  "share_click",
]);

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== "POST") return response.status(405).end();
  const body = readJsonBody<TrackBody>(request.body);

  if (!body?.eventName || !ALLOWED_EVENTS.has(body.eventName) || !body.path || !body.sessionId) {
    return response.status(400).end();
  }

  try {
    const sql = getDatabase();
    await sql`
      insert into bio_events (
        event_name, path, session_id, source, medium, campaign, content,
        referrer, target_id, metadata, occurred_at
      ) values (
        ${body.eventName}, ${body.path.slice(0, 240)}, ${body.sessionId.slice(0, 80)},
        ${body.attribution?.source || "direct"}, ${body.attribution?.medium || "bio"},
        ${body.attribution?.campaign || null}, ${body.attribution?.content || null},
        ${body.attribution?.referrer || null},
        ${String(body.properties?.linkId || body.properties?.offerId || body.properties?.placement || "") || null},
        ${sql.json(body.properties || {})}, ${body.occurredAt ? new Date(body.occurredAt) : new Date()}
      )
    `;
    return response.status(204).end();
  } catch (error) {
    console.error("Analytics error", error);
    return response.status(204).end();
  }
}
