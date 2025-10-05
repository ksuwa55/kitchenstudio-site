// app/rental/page.tsx
"use client";
import "./rental.css"; // ← 追加

export default function Rental() {
  const BOOKING_URL = "https://stores.jp/your-store/reserve";
  const youtubeId = "dQw4w9WgXcQ"; // 実IDに変更
  const heroImages = [
    "/images/rental/hero1.jpg",
    "/images/rental/hero2.jpg",
    "/images/rental/hero3.jpg",
  ];

  return (
    <>
      {/* hero section */}
      <section className="hero heroGradient pageHero" aria-label="Hero">
        <div className="heroImageWrap">
          <img src="/assets/media/studio2.jpg" alt="レンタルスペースの内観" />
        </div>
      </section>

      {/* このページ専用のスコープ用ラッパー */}
      <main className="rentalPage">
        {/* Hero / ギャラリー（メインはYouTube埋め込み） */}
        <section id="rental-hero" className="section">
          <h1 className="pageTitle">レンタルスペース</h1>

            <div className="galleryMain">
              <iframe
                className="ytFrame"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`}
                title="レンタルスペース紹介動画"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

          <p className="lead">
            ちいさなキッチンから、あなたのアイデアをかたちに。撮影・ポップアップ・料理会・ワークショップなど、幅広くご利用いただけます。
          </p>
        </section>

        {/* 設備一覧 */}
        <section id="amenities" className="section">
          <h2 className="secTitle">設備</h2>
          <div className="amenitiesGrid">
            {amenities.map((a) => (
              <div key={a.label} className="amenityCard">
                <div className="iconWrap" aria-hidden>
                  {a.icon}
                </div>
                <div>
                  <div className="amenityLabel">{a.label}</div>
                  {a.note && <div className="amenityNote">{a.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 料金表 */}
        <section id="pricing" className="section">
          <h2 className="secTitle">料金</h2>

          <div className="priceCards">
            {pricing.map((p) => (
              <div key={p.title} className="priceCard">
                <div className="priceHeader">
                  <h3>{p.title}</h3>
                  <p className="priceCaption">{p.caption}</p>
                </div>
                <div className="priceValue">
                  <span className="amount">{p.price}</span>
                  <span className="unit">/ 時間</span>
                </div>
                <ul className="priceDetails">
                  {p.includes.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
                <p className="smallNote">※ 表示は税込み。最低利用時間 {p.minHours} 時間。</p>
              </div>
            ))}
          </div>

          <div className="noticeRow">
            <div className="noticeCard">
              <strong>延長</strong>：30分単位で承ります（空き状況による）。<br />
              <strong>人数目安</strong>：〜8名（着席）。
            </div>
            <div className="noticeCard">
              <strong>商用撮影</strong>：事前申請が必要です。内容によりお見積り。
            </div>
          </div>
        </section>

        {/* 予約導線 */}
        <section id="booking" className="section">
          <div className="ctaCard">
            <div className="ctaText">
              <h2 className="secTitle">仮予約・空き確認</h2>
              <p>
                ご希望の日時と用途をお知らせください。確認後、メールにてご連絡します。確定は外部サイト（STORES）でのお手続きとなります。
              </p>
            </div>
            <div className="ctaBtns">
              <a className="btnPrimary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                予約ページを開く
              </a>
              <a className="btnGhost" href="mailto:info@example.com">メールで問い合わせ</a>
            </div>
          </div>
        </section>

        {/* キャンセルポリシー */}
        <section id="policy" className="section">
          <h2 className="secTitle">キャンセルポリシー</h2>
          <div className="policyCard">
            <ul>
              <li>7日前まで：無料</li>
              <li>6〜3日前：ご予約金の 50%</li>
              <li>2日前〜当日：ご予約金の 100%</li>
            </ul>
            <p className="smallNote">日程変更は1回まで無料（空き状況により）。</p>
          </div>
        </section>

        {/* 注意事項 */}
        <section id="notes" className="section">
          <h2 className="secTitle">注意事項</h2>
          <div className="notesGrid">
            <div className="noteCard">
              <h3>ご利用前</h3>
              <ul>
                <li>近隣への配慮のため、入退室時間の厳守にご協力ください。</li>
                <li>備品の持ち出しはできません。持込電化製品は事前申請が必要です。</li>
              </ul>
            </div>
            <div className="noteCard">
              <h3>ご利用中</h3>
              <ul>
                <li>音量の大きいスピーカーの利用は不可。</li>
                <li>油・においの強い調理は換気のうえ短時間でお願いします。</li>
              </ul>
            </div>
            <div className="noteCard">
              <h3>ご退出時</h3>
              <ul>
                <li>現状復帰・ゴミは分別のうえ指定場所へ。過度な汚れは別途清掃費。</li>
                <li>破損があった場合は必ず申告してください。</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const amenities = [
  { label: "IHコンロ（2口）", note: "最大1.5kW", icon: "🍳" },
  { label: "オーブン/電子レンジ", note: "20L", icon: "🧁" },
  { label: "冷蔵庫・冷凍庫", note: "120L", icon: "🧊" },
  { label: "流し/給湯", note: "お湯あり", icon: "🚰" },
  { label: "食器/カトラリー", note: "〜8名分", icon: "🍽️" },
  { label: "Wi-Fi/電源", note: "上り/下り 良好", icon: "📶" },
  { label: "撮影用ライト", note: "小型×2", icon: "💡" },
  { label: "テーブル/椅子", note: "折畳み可", icon: "🪑" },
  { label: "消耗品", note: "キッチンペーパー等", icon: "🧻" },
];

const pricing = [
  {
    title: "基本プラン（調理器具あり）",
    caption: "料理会・撮影など",
    price: "¥3,500",
    minHours: 2,
    includes: ["IH・調理器具・食器の利用可", "Wi-Fi/電源", "片付け用洗剤・消耗品"],
  },
  {
    title: "ライトプラン（器具なし）",
    caption: "ワークショップ・打合せ",
    price: "¥2,500",
    minHours: 2,
    includes: ["テーブル/椅子のみ", "Wi-Fi/電源", "簡易清掃のみ"],
  },
];
