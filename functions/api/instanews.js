export async function onRequest({ env }) {
  try {
    const res = await fetch(
      `https://${env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/instanews`,
      { headers: { "X-MICROCMS-API-KEY": env.MICROCMS_API_KEY } }
    );
    if (!res.ok) {
      const text = await res.text();
      return new Response(JSON.stringify({ error: res.status, body: text }), {
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
