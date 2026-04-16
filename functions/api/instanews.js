export async function onRequest({ env }) {
  const res = await fetch(
    `https://${env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/instanews`,
    { headers: { "X-MICROCMS-API-KEY": env.MICROCMS_API_KEY } }
  );
  const data = await res.json();
  return Response.json(data.contents ?? []);
}
