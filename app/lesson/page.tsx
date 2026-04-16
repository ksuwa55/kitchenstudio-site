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
      "季節の食材と家庭の台所にフィットするレシピを提案。植物由来の出汁から発酵まで、日常に活きる技を大切にしています。",
    tags: ["旬の野菜", "発酵", "ヴィーガン料理"],
  },
];

async function fetchLessons(): Promise<LessonItem[]> {
  const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
  const API_KEY = process.env.MICROCMS_API_KEY;

  if (!SERVICE_DOMAIN || !API_KEY) {
    throw new Error("MICROCMS env missing");
  }

  const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/lessons?orders=order`;

  const res = await fetch(url, {
    headers: { "X-MICROCMS-API-KEY": API_KEY },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`microCMS not ok: ${res.status} ${text}`);
  }

  const data = await res.json();
  return (data.contents ?? []) as LessonItem[];
}

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const dateStr = d.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    timeZone: "Asia/Tokyo",
  });
  const jstHour = (d.getUTCHours() + 9) % 24;
  const hasTime = jstHour !== 0 || d.getUTCMinutes() !== 0;
  if (!hasTime) return dateStr;
  const timeStr = d.toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Tokyo",
  });
  return `${dateStr} ${timeStr}`;
}

export default async function LessonPage() {
  const heroImage = "/assets/media/lesson_4577.JPG";

  const lessons = await fetchLessons();

  return (
    <>
      <section className="hero heroGradient pageHero" aria-label="Hero">
        <div className="heroImageWrap" aria-hidden>
          <img src={heroImage} alt="レッスンのイメージ" />
        </div>
      </section>

      <main className="lessonPage">
        <section id="concept" className="section">
          <h1 className="pageTitle">ヴィーガンフードレッスン(毎月第２土曜日及び第３土曜日または日曜日＋不定)</h1>
          <p className="lead">
            野菜ソムリエプロ、J-Veganist、発酵料理士インストラクター、発酵ごはんとお菓子のmadoi認定講師のオーナーが、
            旬の野菜をテーマに発酵調味料を活かしたお料理のレッスンをします。
          </p>
        </section>

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
                  <ul className="teacherTags">
                    {t.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="terms" className="section">
          <h2 className="secTitle">利用規約</h2>
          <div className="agreementBlock">
            <p>
              各レッスンのご予約前に必ず
              <a href="https://drive.google.com/file/d/1DXH5Oz8pFPyYdmKa9BFklwRabt5teNnB/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                利用規約
              </a>
              をお読みください。
            </p>
          </div>
        </section>

        <section id="schedule" className="section">
          <h2 className="secTitle">開催予定</h2>

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
        </section>

        <section id="request" className="section">
          <div className="ctaCard">
            <div className="ctaText">
              <h2 className="secTitle">リクエスト（グループ向け）</h2>
              <p className="lead">
                チームビルディングや親子向け、プライベートレッスンのご相談も承ります。 日時や人数、ご希望のテーマをお知らせください。
                <br></br>また３人以上の場合、既存レッスンを別日に設定することも可能です。
              </p>
            </div>

            <div className="ctaBtns">
              <a
                className="btnPrimary"
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                リクエストフォームを開く
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
