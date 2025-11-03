// app/lesson/page.tsx
"use client";
import "./lesson.css"; // ← 追加

export default function LessonPage() {
  const ORDER_URL = "https://stores.jp/your-store/lessons";     // 決済/申込ページ
  const REQUEST_URL = "https://forms.gle/your-request-form";     // グループ向けリクエスト
  const heroImage = "/assets/media/lesson_4577.JPG";             // 画像パス要確認

  return (
    <>
      {/* 画像ヒーロー（共通 pageHero を使用） */}
      <section className="hero heroGradient pageHero" aria-label="Hero">
        <div className="heroImageWrap" aria-hidden>
          <img src={heroImage} alt="レッスンのイメージ" />
        </div>
      </section>

      {/* ページ専用スコープ */}
      <main className="lessonPage">
        {/* コンセプト */}
        <section id="concept" className="section">
          <h1 className="pageTitle">ヴィーガンフードレッスン(毎月第日曜日＋不定)</h1>
          <p className="lead">
            野菜ソムリエプロ、J-Veganist、発酵料理士インストラクター、発酵ごはんとお菓子のmadoi認定講師のオーナーが、旬の野菜をテーマに発酵調味料を活かしたお料理のレッスンをします。<br/>
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

          <div className="lessonList">
            {UPCOMING.map((c) => (
              <article key={c.id} className="lessonCard">
                <div className="lessonThumb">
                  <img src={c.image} alt={c.title} />
                </div>
                <div className="lessonMain">
                  <h3 className="lessonTitle">{c.title}</h3>
                  <div className="lessonMeta">
                    <span className="metaItem">{c.date}</span>
                    <span className="dot">・</span>
                    <span className="metaItem">{c.time}</span>
                    <span className="dot">・</span>
                    <span className="metaItem">定員 {c.capacity} 名</span>
                  </div>
                  <p className="lessonDesc">{c.desc}</p>
                  <div className="lessonFoot">
                    <div className="lessonPrice">{c.price}</div>
                    <a className="btnPrimary" href={c.link} target="_blank" rel="noopener noreferrer">
                      申し込む
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA：仮予約→決済導線 */}
        <section id="order" className="section">
          <div className="ctaCard">
            <div className="ctaText">
              <h2 className="secTitle">仮予約・決済</h2>
              <p>外部サイト（STORES）にてお手続きください。空席状況は随時更新されます。</p>
            </div>
            <div className="ctaBtns">
              <a className="btnPrimary" href={ORDER_URL} target="_blank" rel="noopener noreferrer">
                申し込む
              </a>
              <a className="btnGhost" href="mailto:info@example.com">メールで問い合わせ</a>
            </div>
          </div>
        </section>

        {/* リクエストフォーム（グループ向け） */}
        <section id="request" className="section">
          <h2 className="secTitle">リクエスト（グループ向け）</h2>
          <p className="lead">
            チームビルディングや親子向け、プライベートレッスンのご相談も承ります。
            日時や人数、ご希望のテーマをお知らせください。
          </p>
          <a className="btnPrimary" href={REQUEST_URL} target="_blank" rel="noopener noreferrer">
            リクエストフォームを開く
          </a>
        </section>
      </main>
    </>
  );
}

/* ---- ダミーデータ ---- */
const INSTRUCTORS = [
  {
    name: "Masami Takechi",
    role: "野菜ソムリエプロ・J-Veganist・発酵料理士インストラクター・発酵ごはんとお菓子のmadoi認定講師・SBS学苑講師",
    photo: "/assets/media/teacher-yukari.jpg",
    bio: "季節の食材と家庭の台所にフィットするレシピを提案。和のだしから発酵まで、日常に活きる技を大切にしています。",
    tags: ["基本の和食", "発酵", "保存食"],
  },
];

const UPCOMING = [
  {
    id: "ls1",
    title: "季節の常備菜と段取りの基本",
    date: "2025-11-02 (日)",
    time: "10:00–12:00",
    capacity: 8,
    price: "¥5,500",
    image: "/assets/media/lesson-1.jpg",
    link: "https://stores.jp/your-store/lessons/1",
    desc: "2時間で3品作る段取り練習。だし・下味・保存のコツを押さえます。",
  },
  {
    id: "ls2",
    title: "家庭でできる洋食の火入れ",
    date: "2025-11-09 (日)",
    time: "14:00–16:30",
    capacity: 8,
    price: "¥6,800",
    image: "/assets/media/lesson-2.jpg",
    link: "https://stores.jp/your-store/lessons/2",
    desc: "チキンソテーと付け合わせで温度管理を体験。失敗しにくい手順を学びます。",
  },
  {
    id: "ls3",
    title: "だしの取り方と応用",
    date: "2025-11-16 (日)",
    time: "10:00–12:00",
    capacity: 8,
    price: "¥5,800",
    image: "/assets/media/lesson-3.jpg",
    link: "https://stores.jp/your-store/lessons/3",
    desc: "昆布・かつおの合わせだしを基本に、汁物から煮物への展開を練習。",
  },
];
