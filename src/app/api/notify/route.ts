export async function POST(req: Request) {
  await fetch("https://ntfy.sh/bhanu-portfolio-visits-2026", {
    method: "POST",
    body: "🔔 Someone opened your portfolio website",
  });

  return Response.json({ success: true });
}