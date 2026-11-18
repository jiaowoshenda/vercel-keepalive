export default async function handler(req, res) {
  const targetUrl = "https://jiaowohz.icu/970323";
  const token = process.env.API_TOKEN;

  if (!token) {
    return res.status(500).json({ ok: false, error: "环境变量API_TOKEN未配置" });
  }

  try {
    const r = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json,*/*;q=0.9",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Referer": "https://www.google.com/",
        "Authorization": `Bearer ${token}`
      }
    });
    console.log("唤醒 | 目标:", targetUrl, "状态码:", r.status);
    return res.status(200).json({ ok: true, status: r.status });
  } catch (err) {
    console.error("唤醒异常：", err);
    return res.status(200).json({ ok: false, error: String(err) });
  }
}
