// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import "./contact.css";

type FormState = {
  name: string;
  email: string;
  message: string;
  // スパム対策（人間は触らないhidden）
  website?: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    website: "", // honey pot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(
    null
  );

  const validate = (data: FormState) => {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = "お名前を入力してください。";
    if (!data.email.trim()) e.email = "メールアドレスを入力してください。";
    // 簡易バリデーション
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      e.email = "メールアドレスの形式が正しくありません。";
    }
    if (!data.message.trim()) e.message = "お問い合わせ内容を入力してください。";
    return e;
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // honey pot（ボットが入れると弾く）
    if (form.website) {
      setStatus({ ok: true, msg: "送信しました。" });
      setForm({ name: "", email: "", message: "", website: "" });
      return;
    }

    const v = validate(form);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error(await res.text().catch(() => "Send error"));

      setStatus({ ok: true, msg: "送信しました。折り返しご連絡いたします。" });
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      setStatus({
        ok: false,
        msg: "送信に失敗しました。時間をおいて再度お試しください。",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="contactPage">
      <section className="section">
        <h1 className="pageTitle">お問い合わせ</h1>
        <p className="lead">
          内容を確認の上、原則として1〜2営業日以内にご返信いたします。
        </p>
      </section>

      <section className="section">
        <div className="formCard">
          <form onSubmit={onSubmit} noValidate>
            {/* ステータス表示（スクリーンリーダー対応） */}
            <div
              className={`formStatus ${status ? (status.ok ? "ok" : "ng") : ""}`}
              role="status"
              aria-live="polite"
            >
              {status?.msg}
            </div>

            {/* honey pot（隠し） */}
            <div className="hp">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                autoComplete="off"
                tabIndex={-1}
                value={form.website}
                onChange={onChange}
              />
            </div>

            <div className="grid">
              <div className="field">
                <label htmlFor="name">お名前</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "err-name" : undefined}
                  required
                />
                {errors.name && (
                  <p id="err-name" className="error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="email">メールアドレス</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined}
                  required
                />
                {errors.email && (
                  <p id="err-email" className="error">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="field fieldFull">
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  value={form.message}
                  onChange={onChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-message" : undefined}
                  required
                />
                {errors.message && (
                  <p id="err-message" className="error">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="actions">
              <button
                className="btnPrimary"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "送信中…" : "送信する"}
              </button>
            </div>
          </form>
        </div>

        <p className="formNote">
          ※ ドメインgmail.comからのメールを受信できるように設定をお願いいたします。
        </p>
      </section>
    </main>
  );
}
