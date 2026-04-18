export async function onRequest({ env }) {
  try {
    const url = `https://${env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/instanews`;
    const res = await fetch(url, {
      headers: { "X-MICROCMS-API-KEY": env.MICROCMS_API_KEY },
    });
    if (!res.ok) {
      const text = await res.text();
      return new Response(JSON.stringify({ error: res.status, body: text, url, hasKey: !!env.MICROCMS_API_KEY }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }
    const data = await res.json();
    return new Response(JSON.stringify(data.contents ?? []), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
