export default async function handler(req, res) {
  try {
    const targetUrl = "https://danmu-6p1ptbv2h-jiaowoshendas-projects.vercel.app/api/v2/search";

    await fetch(targetUrl, {
      signal: AbortSignal.timeout(10000)
    });

    res.status(200).json({
      ok: true,
      message: "danmu-api 唤醒请求已发送"
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      error: err.toString()
    });
  }
}
