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
          <h1 className="pageTitle">食と集いのレンタルスペース</h1>

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
            キッチン設備のついた光あふれるスペース<br/>
            料理教室やグループでの料理会、料理動画の撮影に適しています。
            もちろんキッチンを使用しないスペースとしての使用もOKです。<br/>
            サークルのお茶会などにもどうぞ。
          </p>
        </section>

        {/* 設備一覧 */}
        <section id="amenities" className="section">
          <h2 className="secTitle">設備・備品</h2>

          {amenities.map((group) => (
            <div key={group.category} className="amenityGroup">
              <h3 className="amenityCategory">{group.category}</h3>
              <div className="amenitiesGrid">
                {group.items.map((a) => (
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
            </div>
          ))}
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
  {
    category: "共通",
    items: [
      { label: "Wi-Fi", note: "高速・安定", icon: "📶" },
      { label: "手洗い・トイレ", note: "温水洗浄便座", icon: "🚻" },
      { label: "清掃用具", note: "掃除機・モップ等", icon: "🧹" },
      { label: "テーブル", note: "折畳み可", icon: "🪑" },
      { label: "いす", note: "最大8脚", icon: "🪑" },
    ],
  },
  {
    category: "キッチン",
    items: [
      { label: "ガスコンロ（3口）", note: "高火力タイプ", icon: "🔥" },
      { label: "流し台", icon: "🚰" },
      { label: "調理台", icon: "🍽️" },
      { label: "電子レンジ", icon: "🧁" },
      { label: "炊飯器", note: "3合炊き", icon: "🍚" },
      { label: "冷凍冷蔵庫", note: "120L", icon: "🧊" },
      {
        label: "調理用具",
        note: "鍋・フライパン・ざる・ボウル・包丁・まな板・おたま・トング等",
        icon: "🍲",
      },
      {
        label: "食器・カトラリー類",
        note: "平皿・小鉢・ガラスコップ・茶碗・どんぶり・湯呑み・スプーン・フォーク・箸など",
        icon: "🍴",
      },
    ],
  },
];


const pricing = [
  {
    title: "基本プラン（キッチン設備、調理器具あり）",
    caption: "料理会、料理教室、料理動画等撮影、配信等",
    price: "¥1,300",
    minHours: 2,
    includes: [
      "キッチン設備・調理器具・食器の利用可",
      "Wi-Fi/電源",
      "片付け用洗剤・消耗品",
      "※時間は準備から撤収までを含みます",
    ],
  },
  {
    title: "ライトプラン（キッチン部分の使用不可）",
    caption: "料理以外のワークショップ、動画等の撮影、配信等",
    price: "¥900",
    minHours: 2,
    includes: [
      "テーブル/椅子のみ利用可",
      "Wi-Fi/電源",
      "簡易清掃のみ",
      "※時間は準備から撤収までを含みます",
    ],
  },
  {
    title: "営業プラン",
    caption:
      "期間限定レストラン・カフェ、フードフェスの商品作り等にご利用いただけます。",
    price: "ご相談",
    minHours: 0,
    includes: [
      "ご希望内容に応じて個別お見積り",
      "お問い合わせフォームからご相談ください",
    ],
  },
];
