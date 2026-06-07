import { EmailMessage } from "cloudflare:email";

export async function onRequestPost({ request, env }) {
  try {
    const { name, email, subject, message } = await request.json();

    const bodyText = [
      `お名前: ${name}`,
      `メールアドレス: ${email}`,
      `お問い合わせの種類: ${subject}`,
      ``,
      `お問い合わせ内容:`,
      message,
    ].join("\r\n");

    const rawEmail = [
      `From: "みやびさいキッチンスタジオ" <noreply@miyabisai.com>`,
      `To: suwabemasami0904@gmail.com`,
      `Reply-To: "${name}" <${email}>`,
      `Subject: [お問い合わせ] ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset=utf-8`,
      ``,
      bodyText,
    ].join("\r\n");

    const msg = new EmailMessage(
      "noreply@miyabisai.com",
      "suwabemasami0904@gmail.com",
      rawEmail
    );

    await env.SEND_EMAIL.send(msg);

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
