export function GET() {
  // For now: always ready (no external deps for this static site)
  return new Response(JSON.stringify({ ready: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
