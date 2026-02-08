"use client";

import { useEffect, useState } from "react";
import "./lesson.css";

type LessonItem = {
  id: string;
  title: string;
  date: string;
  capacity: number;
  price: string;
  image?: { url: string };
  applyUrl: string;
  order?: number;
  desc?: string;
};

const INSTRUCTORS = [
  {
    name: "Masami Takechi",
    role:
      "野菜ソムリエプロ・J-Veganist・発酵料理士インストラクター・発酵ごはんとお菓子のmadoi認定講師・SBS学苑講師",
    photo: "/assets/media/instructor_pic.JPG",
    bio:
      "季節の食材と家庭の台所にフィットするレシピを提案。和のだしから発酵まで、日常に活きる技を大切にしています。",
    tags: ["基本の和食", "発酵", "保存食"],
  },
];

export default function LessonPage() {
  const ORDER_URL = "https://stores.jp/your-store/lessons";
  const REQUEST_URL = "https://forms.gle/your-request-form";
  const heroImage = "/assets/media/lesson_4577.JPG";

  const [lessons, setLessons] = useState<LessonItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await fetch("/api/lessons");
        if (!res.ok) {
          throw new Error("Failed to fetch /api/lessons");
        }
        const data = (await res.json()) as LessonItem[];
        setLessons(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, []);

  // "2025-11-02 (日)" みたいな表示にする
  const formatDate = (iso: string) => {
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
    });
  };

  return (
    <>
      {/* 画像ヒーロー */}
      <section className="hero heroGradient pageHero" aria-label="Hero">
        <div className="heroImageWrap" aria-hidden>
          <img src={heroImage} alt="レッスンのイメージ" />
        </div>
      </section>

      <main className="lessonPage">
        {/* コンセプト */}
        <section id="concept" className="section">
          <h1 className="pageTitle">ヴィーガンフードレッスン(毎月第日曜日＋不定)</h1>
          <p className="lead">
            野菜ソムリエプロ、J-Veganist、発酵料理士インストラクター、発酵ごはんとお菓子のmadoi認定講師のオーナーが、旬の野菜をテーマに発酵調味料を活かしたお料理のレッスンをします。<br />
            参加者全員でヘルシーランチを作り、その場で召し上がっていただきます。グループのリクエストにお応えするプライベートレッスンも承ります。
          </p>
        </section>

        {/* 講師紹介 */}
        <section id="instructors" className="section">
          <h2 className="secTitle">講師紹介</h2>

          <div className="instructorsGrid">
            {INSTRUCTORS.map((t) => (
              <article key={t.name} className="teacherCard">
                <div className="portrait">
                  <img src={t.photo} alt={`${t.name}の写真`} />
                </div>
                <div className="teacherBody">
                  <h3 className="teacherName">{t.name}</h3>
                  <p className="teacherRole">{t.role}</p>
                  <p className="teacherBio">{t.bio}</p>
                  <ul className="teacherTags" aria-label="得意分野">
                    {t.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 開催レッスン（一覧） */}
        <section id="schedule" className="section">
          <h2 className="secTitle">開催予定</h2>

          {loading && <p>開催予定を読み込み中です…</p>}

          {!loading && (
            <div className="lessonList">
              {lessons.map((c) => (
                <article key={c.id} className="lessonCard">
                  <div className="lessonThumb">
                    {c.image && <img src={c.image.url} alt={c.title} />}
                  </div>
                  <div className="lessonMain">
                    <h3 className="lessonTitle">{c.title}</h3>
                    <div className="lessonMeta">
                      <span className="metaItem">{formatDate(c.date)}</span>
                      <span className="dot">・</span>
                      <span className="metaItem">定員 {c.capacity} 名</span>
                    </div>
                    {c.desc && <p className="lessonDesc">{c.desc}</p>}
                    <div className="lessonFoot">
                      <div className="lessonPrice">{c.price}</div>
                      <a
                        className="btnPrimary"
                        href={c.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        申し込む
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 仮予約・決済 */}
        <section id="order" className="section">
          <div className="ctaCard">
            <div className="ctaText">
              <h2 className="secTitle">仮予約・決済</h2>
              <p>外部サイト（STORES）にてお手続きください。空席状況は随時更新されます。</p>
            </div>
            <div className="ctaBtns">
              <a
                className="btnPrimary"
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                申し込む
              </a>
              <a className="btnGhost" href="mailto:info@example.com">
                メールで問い合わせ
              </a>
            </div>
          </div>
        </section>

        {/* グループ向けリクエスト */}
        <section id="request" className="section">
          <h2 className="secTitle">リクエスト（グループ向け）</h2>
          <p className="lead">
            チームビルディングや親子向け、プライベートレッスンのご相談も承ります。
            日時や人数、ご希望のテーマをお知らせください。
          </p>
          <a
            className="btnPrimary"
            href={REQUEST_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            リクエストフォームを開く
          </a>
        </section>
      </main>
    </>
  );
}
