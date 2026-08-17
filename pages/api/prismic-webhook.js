export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/dispatches`,
      {
        method: "POST",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event_type: "prismic_publish",
        }),
      },
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("GitHub API error:", error);

      return res.status(500).json({
        error: "Failed to trigger GitHub Actions",
      });
    }

    return res.status(200).json({
      success: true,
      message: "GitHub deploy triggered",
    });
  } catch (error) {
    console.error("Webhook error:", error);

    return res.status(500).json({
      error: "Webhook failed",
    });
  }
}
