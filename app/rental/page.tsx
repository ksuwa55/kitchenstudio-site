// app/rental/page.tsx
"use client";
import "./rental.css"; // ← 追加

export default function Rental() {
  const BOOKING_URL = "https://stores.jp/your-store/reserve";
  const RENTAL_BOOK_URL = "https://reserva.be/miyabisai";
  const youtubeId = "dQw4w9WgXcQ";
  const heroImages = [
    "/assets/media/kitchin1.jpg",
    "/assets/media/space1.jpg",
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
        {/* Hero / ギャラリー（画像と広さ） */}
        <section id="rental-hero" className="section">
          <h1 className="pageTitle">食と集いのレンタルスペース</h1>

          <p className="lead">
            キッチン設備のついた光あふれるスペース。<br />
            料理教室やグループでの料理会、料理動画の撮影に適しています。<br />
            もちろんキッチンを使用しないスペースとしての使用もOKです。<br />
            サークルのお茶会などにもどうぞ。
          </p>

          {/* 写真ギャラリー（キッチン／フリースペース） */}
          <div className="heroGallery">
            {/* 例：heroImages を使用（/images/rental/hero1.jpg 等） */}
            {heroImages.slice(0, 2).map((src, i) => (
              <figure key={src} className="heroPhoto">
                <img src={src} alt={i === 0 ? "キッチンエリアの写真" : "フリースペースの写真"} />
                <figcaption>{i === 0 ? "キッチン" : "フリースペース"}</figcaption>
              </figure>
            ))}
          </div>

          {/* 広さ表示 */}
          <div className="areaBox">
            <div className="areaItem">
              <span className="areaLabel">広さ</span>
              <span>約17帖</span>
            </div>
          </div>
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
                  {p.minHours > 0 && <span className="unit">/ 2時間</span>}
                </div>
                <ul className="priceDetails">
                  {p.includes.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
                {p.minHours > 0 && <p className="smallNote">※ 表示は税込み。最低利用時間 {p.minHours} 時間。</p>}
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

        {/* 入館方法 & 利用規約 */}
        <section id="instructions" className="section">
          <h2 className="secTitle">入館方法と利用規約</h2>

          <div className="entryVideo">
            <h3>入館方法</h3>
            <p>ご利用前にこちらの動画をご確認ください。</p>
            <div className="videoWrap">
              <iframe
                className="ytFrame"
                src="https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1&playsinline=1"
                title="入館方法"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="agreementBlock">
            <h3>利用規約</h3>
            <p>
              ご予約前に必ず
              <a href="https://drive.google.com/file/d/1tEytN8a1MOTZ4WLOYSW9Je0f2OuxzKhj/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                利用規約
              </a>
              をご確認ください。
            </p>
            <label className="agreeCheck">
              <input type="checkbox" id="agreeTerms" /> 利用規約に同意する
            </label>
            <div className="agreeBtnWrap">
              <a
                id="reserveBtn"
                className="btnPrimary disabled"
                href={RENTAL_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                予約に進む
              </a>
            </div>
          </div>
        </section>

        <script>
          {`
            document.addEventListener('DOMContentLoaded', () => {
              const checkbox = document.getElementById('agreeTerms');
              const button = document.getElementById('reserveBtn');
              checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                  button.classList.remove('disabled');
                } else {
                  button.classList.add('disabled');
                }
              });
            });
          `}
        </script>

        {/* 予約の流れ */}
        <section id="flow" className="section">
          <h2 className="secTitle">レンタルスペース予約の流れ</h2>
          <div className="flowCard">
          <ol className="flowList">
            <li>
              外部サイト（<a href="https://id-sso.reserva.be/login/business" target="_blank" rel="noopener noreferrer">reserva.be</a>）にて仮予約を行ってください。
            </li>
            <li>
              予約サイトからの自動メールとは別に <strong>miyabisai.info@gmail.com</strong> より本予約に関する案内メールが送られます。案内は予約日のおおむね20日前です。
            </li>
            <li>
              <a href="https://miyabisai.stores.jp/" target="_blank" rel="noopener noreferrer">STORES</a> にてレンタルスペース利用券の購入決済を行うことで本予約完了します。
            </li>
            <li>
              STORESより決済完了の自動メールが送られます。
            </li>
            <li>
              後日利用マニュアル等を <strong>miyabisai.info@gmail.com</strong> より送付いたします。
            </li>
          </ol>
          </div>
        </section>

        {/* キャンセルポリシー */}
        <section id="policy" className="section">
          <h2 className="secTitle">キャンセルポリシー</h2>
          <div className="policyCard">
            <ul>
              <li>
                予約日の3日前0:00まで（例：予約日が5日の場合は2日0:00まで）にキャンセルの旨を<a href="/contact">問い合わせフォーム</a>、または <strong>miyabisai.info@gmail.com</strong> へご連絡ください。
                連絡の際はタイトルに「⚫︎月⚫︎日の本予約取り消し希望」と記入し、予約番号・お名前を忘れずにご記載ください。
              </li>
              <li>予約日3日前0:00以降のキャンセルは返金致しかねます。</li>
            </ul>
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
                <li>備品の持ち出しはできません。持込電化製品は事前にお知らせください。</li>
                <li>ご利用に際しては必ず利用規約をご確認ください。</li>
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
                <li>ゴミは原則お持ち帰りです。（オプションで処理のお申し込みもできます）。</li>
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
      { label: "冷凍冷蔵庫", note: "120L", icon: "🧊" },
      { label: "エアコン", icon: "❄️" },
      { label: "湯沸かしポッド", icon: "🫖" },
      {
        label: "食器",
        note: "手洗い、食器等の洗浄に使用可能、汚れ物不可",
        icon: "🍴",
      },
      { label: "流し台", note: "手洗い、食器等の洗浄に使用可能、汚れ物不可", icon: "🚰" },
    ],
  },
  {
    category: "キッチンオプション",
    items: [
      { label: "ガスコンロ（3口）", note: "高火力タイプ", icon: "🔥" },
      { label: "流し台", icon: "🚰" },
      { label: "調理台", icon: "🍽️" },
      { label: "オーブンレンジ", icon: "🧁" },
      {
        label: "調理用具",
        note: "鍋・フライパン・ざる・ボウル・包丁・まな板・おたま・トング等",
        icon: "🍲",
      },
      {
        label: "食器・カトラリー類",
        note: "平皿・小鉢・茶碗・湯呑み・スプーン・フォーク・箸など",
        icon: "🍴",
      },
    ],
  },
];


const pricing = [
  {
    title: "基本プラン",
    caption: "料理以外のワークショップ、動画等の撮影、配信等",
    price: "¥2,800〜",
    minHours: 2,
    includes: [
      "テーブル/椅子、キッチンは流し台のみ利用可",
      "一部の食器、湯沸かしポットは利用可",
      "Wi-Fi/電源",
      "※時間は準備から撤収までを含みます",
    ],
  },
  {
    title: "キッチンオプションプラン（キッチン設備、調理器具あり）",
    caption: "料理会、料理教室、料理動画等撮影、配信等",
    price: "¥3,200〜",
    minHours: 2,
    includes: [
      "キッチン設備・調理器具・食器の利用可",
      "Wi-Fi/電源",
      "片付け用洗剤等",
      "※時間は準備から撤収までを含みます",
    ],
  },
  {
    title: "営業利用をご検討の方へ（許可付き厨房の使用）",
    caption:
      "当アトリエの営業許可を取得した厨房（別室）の利用については、期間限定レストラン・カフェ、フードフェスの商品作り等にご利用いただけますが、レンタルスペースの利用規約とは異なり、個別の利用条件と契約（覚書・誓約書など）が必要となります。ご利用を希望される方は、必ず事前にご相談ください。なお、ご利用にあたっては、賠償責任保険へのご加入をお願いしております。誠に恐縮ですが、衛生管理及び事故責任の観点から、初回の利用希望者はお断りする場合があります。まずは、具体的な利用内容とご経験を添えてお問い合わせください。",
    price: "ご相談",
    minHours: 0,
    includes: [
      "ご希望内容に応じて個別お見積り",
      "お問い合わせフォームからご相談ください",
    ],
  },
];
