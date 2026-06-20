export async function POST() {
  console.log("NOTIFY API HIT");

  const response = await fetch(
    "https://ntfy.sh/bhanu-portfolio-visits-2026",
    {
      method: "POST",
      body: "🔔 Portfolio opened",
    }
  );

  console.log("NTFY STATUS:", response.status);

  return Response.json({
    success: true,
    status: response.status,
  });
}