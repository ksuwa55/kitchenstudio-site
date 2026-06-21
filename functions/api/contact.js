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
    ].join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "みやびさいキッチンスタジオ <onboarding@resend.dev>",
        to: "suwabemasami0904@gmail.com",
        reply_to: email,
        subject: `[お問い合わせ] ${subject}`,
        text: bodyText,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err);
    }

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
