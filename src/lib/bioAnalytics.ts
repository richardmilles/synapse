type BioEventProperties = Record<string, string | number | boolean | undefined>;

const SESSION_KEY = "synapse_bio_session";
const ATTRIBUTION_KEY = "synapse_bio_attribution";

type Attribution = {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  referrer: string;
};

const readAttribution = (): Attribution => {
  const params = new URLSearchParams(window.location.search);
  const current = {
    source: params.get("utm_source") || params.get("source") || "direct",
    medium: params.get("utm_medium") || "bio",
    campaign: params.get("utm_campaign") || "",
    content: params.get("utm_content") || "",
    referrer: document.referrer || "",
  };

  try {
    const stored = sessionStorage.getItem(ATTRIBUTION_KEY);
    if (stored && current.source === "direct") return JSON.parse(stored) as Attribution;
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(current));
  } catch {
    // Les webviews peuvent désactiver le stockage. L'attribution courante reste utilisable.
  }

  return current;
};

const getSessionId = () => {
  try {
    const existing = sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const id = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, id);
    return id;
  } catch {
    return crypto.randomUUID();
  }
};

export const trackBioEvent = (eventName: string, properties: BioEventProperties = {}) => {
  if (typeof window === "undefined") return;

  const payload = JSON.stringify({
    eventName,
    path: window.location.pathname,
    sessionId: getSessionId(),
    attribution: readAttribution(),
    properties,
    occurredAt: new Date().toISOString(),
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/track", new Blob([payload], { type: "application/json" }));
    return;
  }

  void fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  });
};

export const getBioAttribution = () =>
  typeof window === "undefined" ? undefined : readAttribution();

