import { volunteerSchema } from "@/lib/volunteer-schema";

const endpoint = "https://script.google.com/macros/s/AKfycbxrtPS7mp-_bQB30e9dbFsZIFekyDzDYYyAsGXj6GKdO0lHmtP8Y8QjeYDDLYHl6kcHXg/exec";
const maxBodyBytes = 16_384;

function reply(success: boolean, status: number) {
  return Response.json({ success }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  // Browser submissions must come from this site. This is not bot protection.
  if (request.headers.get("origin") !== new URL(request.url).origin) return reply(false, 403);
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") return reply(false, 415);

  let input: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply(false, 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return reply(false, 413);
      }
      chunks.push(value);
    }
    const body = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      body.set(chunk, offset);
      offset += chunk.byteLength;
    }
    input = JSON.parse(new TextDecoder().decode(body));
  } catch {
    return reply(false, 400);
  }

  const parsed = volunteerSchema.safeParse(input);
  if (!parsed.success) return reply(false, 400);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...parsed.data, otherActivity: parsed.data.otherActivity ?? "" }),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(20_000),
    });
    // Apps Script redirects to its JSON response. HTTP 200 alone is not success:
    // Google also returns HTML error pages with that status.
    if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) return reply(false, 502);
    const result: unknown = await response.json();
    if (!result || typeof result !== "object" || !("success" in result) || result.success !== true) return reply(false, 502);
    return reply(true, 200);
  } catch {
    // Do not log request data, upstream bodies, or errors that could contain PII.
    // No automatic retries: a lost response can follow a successful Sheets write.
    return reply(false, 502);
  }
}
