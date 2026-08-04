export type ApiRequest = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
  query?: Record<string, string | string[] | undefined>;
};

export type ApiResponse = {
  status: (statusCode: number) => ApiResponse;
  json: (body: unknown) => void;
  send: (body: string) => void;
  end: () => void;
  setHeader: (name: string, value: string) => void;
};

export const readJsonBody = <T>(body: unknown): T | null => {
  if (typeof body === "object" && body !== null) return body as T;
  if (typeof body !== "string") return null;
  try {
    return JSON.parse(body) as T;
  } catch {
    return null;
  }
};

export const getBearerToken = (request: ApiRequest) => {
  const header = request.headers.authorization;
  const value = Array.isArray(header) ? header[0] : header;
  return value?.startsWith("Bearer ") ? value.slice(7) : "";
};

