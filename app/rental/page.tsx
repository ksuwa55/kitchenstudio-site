"use client";

/**
 * レンタルスペースページ
 * - 写真（ギャラリー）
 * - 設備一覧（アイコン＋テキスト）
 * - 料金表（調理器具あり／なし）
 * - 予約導線（仮予約→外部リンク）
 * - キャンセルポリシー
 * - 注意事項
 *
 * 画像URLや予約リンクはダミーです。必要に応じて差し替えてください。
 */
export default function Rental() {
  const BOOKING_URL = "https://stores.jp/your-store/reserve"; // 外部予約のリンクに差し替え
  const heroImages = [
    "/images/rental/hero1.jpg",
    "/images/rental/hero2.jpg",
    "/images/rental/hero3.jpg",
  ]; // 適宜差し替え

  return (
    <>
      {/* hero section */}
      <section className="hero heroGradient pageHero" aria-label="Hero">
        <div className="heroImageWrap">
          <img 
            src="/assets/media/studio2.jpg" 
            alt="レンタルスペースの内観" 
          />        
        </div>
      </section>
      <main>
        {/* Hero / ギャラリー */}
        <section id="rental-hero" className="section">
          <h1 className="pageTitle">レンタルスペース</h1>

          <div className="galleryGrid">
            <div className="galleryMain">
              <img src={heroImages[0]} alt="レンタルスペース 内観" />
            </div>
            <div className="gallerySide">
              <img src={heroImages[1]} alt="使用例1" />
              <img src={heroImages[2]} alt="使用例2" />
            </div>
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

      <style jsx>{`
        /* 共通セクションレイアウト（ホームの雰囲気を踏襲） */
        .section {
          max-width: 1100px;
          margin: 40px auto;
          padding: 0 20px;
        }
        .pageTitle {
          font-size: 36px;
          font-weight: 800;
          display: inline-block;
          border-bottom: 3px solid #111;
          margin: 8px 0 20px;
          letter-spacing: 0.02em;
        }
        .lead {
          margin-top: 16px;
          color: #555;
          line-height: 1.9;
        }
        .secTitle {
          font-size: 26px;
          font-weight: 700;
          margin: 6px 0 18px;
        }

        /* ギャラリー：左大・右上下の2枚（サービスセクションと似たグリッド） */
        .galleryGrid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
        }
        .galleryMain img,
        .gallerySide img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        }
        .galleryMain {
          aspect-ratio: 4/3;
        }
        .gallerySide {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 20px;
        }
        .gallerySide img {
          aspect-ratio: 4/3;
        }

        /* 設備一覧（カード） */
        .amenitiesGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        .amenityCard {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          border: 1px solid #e6e6e6;
          border-radius: 12px;
          padding: 14px 16px;
          background: #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
        }
        .iconWrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #f4f4f4;
          display: grid;
          place-items: center;
          font-size: 20px;
        }
        .amenityLabel { font-weight: 700; }
        .amenityNote { color: #777; font-size: 13px; }

        /* 料金カード */
        .priceCards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin-top: 8px;
        }
        .priceCard {
          border: 1px solid #e6e6e6;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
          padding: 18px 18px 14px;
        }
        .priceHeader h3 {
          margin: 0 0 6px;
          font-size: 20px;
        }
        .priceCaption { color: #777; margin: 0 0 10px; }
        .priceValue { margin: 6px 0 8px; }
        .amount { font-size: 28px; font-weight: 800; }
        .unit { color: #777; margin-left: 4px; }
        .priceDetails { margin: 10px 0 6px; padding-left: 18px; }
        .smallNote { color: #777; font-size: 13px; }

        .noticeRow {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 14px;
        }
        .noticeCard {
          border: 1px dashed #d9d9d9;
          padding: 12px 14px;
          border-radius: 10px;
          background: #fcfcfc;
          color: #444;
        }

        /* 予約CTA */
        .ctaCard {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
          align-items: center;
          border: 1px solid #e6e6e6;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          padding: 20px;
        }
        .ctaText p { color: #555; margin: 6px 0 0; }
        .ctaBtns { display: flex; gap: 12px; justify-content: flex-end; }
        .btnPrimary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 18px;
          border-radius: 10px;
          background: #111;
          color: #fff;
          text-decoration: none;
          font-weight: 700;
        }
        .btnPrimary:hover { opacity: .9; }
        .btnGhost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 18px;
          border-radius: 10px;
          background: #f5f5f5;
          color: #111;
          text-decoration: none;
          font-weight: 700;
          border: 1px solid #e4e4e4;
        }

        /* ポリシー/注意事項 */
        .policyCard {
          border: 1px solid #e6e6e6;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
          padding: 16px 18px;
        }
        .notesGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        .noteCard {
          border: 1px solid #e6e6e6;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
          padding: 14px 16px;
        }
        .noteCard h3 { margin: 4px 0 8px; font-size: 18px; }

        /* レスポンシブ */
        @media (max-width: 980px) {
          .galleryGrid { grid-template-columns: 1fr; }
          .galleryMain { aspect-ratio: 16/9; }
          .gallerySide { grid-template-rows: none; grid-template-columns: 1fr 1fr; }
          .ctaCard { grid-template-columns: 1fr; }
          .ctaBtns { justify-content: flex-start; }
        }
        @media (max-width: 840px) {
          .amenitiesGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .priceCards { grid-template-columns: 1fr; }
          .noticeRow { grid-template-columns: 1fr; }
          .notesGrid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .amenitiesGrid { grid-template-columns: 1fr; }
          .pageTitle { font-size: 30px; }
        }
      `}</style>
    </>
  );
}

/* —— ダミーデータ（アイコンは絵文字 or シンプルSVGで軽量に） —— */
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
