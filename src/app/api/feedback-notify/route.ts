export async function POST(req: Request) {

  const data = await req.json();

  await fetch(
    "https://ntfy.sh/bhanu-portfolio-visits-2026",
    {
      method: "POST",
      body: `
⭐ New Portfolio Feedback

Name: ${data.name}

Rating: ${data.rating}/5

Feedback:
${data.feedback}

Time:
${new Date().toLocaleString()}
`
    }
  );

  return Response.json({
    success: true
  });
}