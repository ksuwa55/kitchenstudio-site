// app/access/page.tsx
"use client";
import "./access.css"; // ページ専用CSS

export default function AccessPage() {
  // 住所や表示名は好きに差し替えOK
  const PLACE_NAME = "Kitchen Studio";
  const ADDRESS = "〒420-0841 静岡県静岡市葵区上足洗2-11-47";
  const WALK_ACCESS = "東海道線「静岡駅」東口より徒歩20分";
  const BUS_ACCESS = "静鉄バス 上足洗下車 徒歩1分";
  const PARKING = "近隣コインパーキングをご利用ください（提携なし）";
  const MAP_Q = encodeURIComponent(`${PLACE_NAME} ${ADDRESS}`);

  return (
    <main className="accessPage">
      {/* タイトル */}
      <section className="section">
        <h1 className="pageTitle">アクセス</h1>
        <p className="lead">
          初めての方でも迷わないよう、地図とルートのご案内をまとめました。
        </p>
      </section>

      {/* Google Map 埋め込み */}
      <section className="section">
        <div className="mapCard">
          <div className="mapWrap" aria-label={`${PLACE_NAME} の地図`}>
            <iframe
              className="gmap"
              src={`https://www.google.com/maps?q=${MAP_Q}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mapActions">
            <a
              className="btnPrimary"
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_Q}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google マップで開く
            </a>
          </div>
        </div>
      </section>

      {/* 住所・交通手段・駐車場 */}
      <section className="section">
        <div className="infoGrid">
          <article className="infoCard">
            <h2 className="secTitle">住所</h2>
            <p className="address">
              <span className="emoji" aria-hidden>📍</span>
              {ADDRESS}
            </p>
            <p className="note">エレベーターで2Fへお上がりください。</p>
          </article>

          <article className="infoCard">
            <h2 className="secTitle">アクセス</h2>
            <ul className="list">
              <li>
                <span className="emoji" aria-hidden>🚶‍♀️</span>
                {WALK_ACCESS}
              </li>
              <li>
                <span className="emoji" aria-hidden>🚌</span>
                {BUS_ACCESS}
              </li>
            </ul>
          </article>

          <article className="infoCard">
            <h2 className="secTitle">駐車場</h2>
            <p>
              <span className="emoji" aria-hidden>🚗</span>
              {PARKING}
            </p>
            <p className="note">
              自転車は建物前に一時駐輪可（通行の妨げにならないようご配慮ください）。
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
