export default async function handler(req, res) {
  try {
    // ========== 这里两处你后面要改 ==========
    const danmuUrl = "https://danmu-6plptbv2h-jiaowoshendas-projects.vercel.app";
    const authToken = "Bearer 这里粘贴你抓到的token";
    // ======================================

    await fetch(danmuUrl, {
      headers: {
        Authorization: authToken
      },
      signal: AbortSignal.timeout(10000) // 10秒超时
    });

    res.status(200).json({
      ok: true,
      message: "唤醒弹幕服务请求已发出"
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      error: err.toString()
    });
  }
}
