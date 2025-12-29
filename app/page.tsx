"use client";

import { useEffect } from "react";

export default function Home() {
  // TODO: replace with your real URLs
  const STORES_BOOK_URL = "https://stores.jp/your-shop/booking";
  const INSTAGRAM_URL = "https://www.instagram.com/miyabi_sai/";

  // ここに「実際の投稿URL」を貼る（p/ または reel/ のURL）
  const instagramPostUrls = [
    "https://www.instagram.com/p/DSuRfy8GPrD/",
    "https://www.instagram.com/p/DSzTEtZjL2O/",
    "https://www.instagram.com/p/DSmohGPjE5Z/",
  ];

  // Instagramの埋め込みスクリプトを1回だけ読み込んで、描画後に処理を走らせる
  useEffect(() => {
    const w = window as any;

    const processEmbeds = () => {
      if (w?.instgrm?.Embeds?.process) {
        w.instgrm.Embeds.process();
      }
    };

    // すでにscriptがあるなら再処理だけ
    const existing = document.querySelector('script[data-ig-embed="true"]');
    if (existing) {
      processEmbeds();
      return;
    }

    const s = document.createElement("script");
    s.async = true;
    s.defer = true;
    s.src = "https://www.instagram.com/embed.js";
    s.setAttribute("data-ig-embed", "true");
    s.onload = () => processEmbeds();
    document.body.appendChild(s);

    // 念のため
    processEmbeds();
  }, []);

  return (
    <>
      {/* hero section */}
      <section className="hero heroGradient" aria-label="Hero">
        <div className="heroVideoWrap" aria-hidden>
          <video autoPlay muted loop playsInline poster="/assets/media/poster.jpg">
            <source src="/assets/media/miyabisai.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <main>
        <section id="concept" style={{ maxWidth: 1100, margin: "40px auto", padding: "0 20px" }}>
          <h2 className="section-title">コンセプト</h2>
          <p>
            豊かな「食」と仲間との語らいは、人を笑顔にします。 <br />
            <br />
            私たちが考える豊かな「食」とは、大地と太陽の恵みをいっぱいに受けた産物から生まれた作物と、健康な体へと導く酵素の働きを享受することです。
            この理想を叶えるため、「野菜」と「発酵」をテーマにしたキッチンアトリエ「みやびさい」を設立しました。
            <br />
            <br />
            旬を感じ心身に栄養を与える「野菜」と、古来の知恵で食品を有益にする「発酵」。さまざまな食製品があふれる現代だからこそ、この知恵を活かした「手作りの食」を大切にしたいと考えます。
            <br />
            <br />
            「miyabisai」が、皆さまの豊かな食生活と健康、笑顔を育むお手伝いができる場所となれば幸いです。
          </p>
        </section>

        <section id="service" style={{ maxWidth: 1100, margin: "40px auto", padding: "0 20px" }}>
          <h2 className="section-title">サービス</h2>
          <div className="service-grid">
            <div className="rental">
              <img src="/assets/media/studio2.jpg" alt="レンタルスペース" />
              <p>
                レンタルスペース
                <br />
                <small>「食」を中心に語らいの場を</small>
              </p>
              <a href={STORES_BOOK_URL}>予約</a>
            </div>
            <div className="deli">
              <img src="/assets/media/deli3−2.jpg" alt="デリ" />
              <p>
                デリ
                <br />
                <small>植物由来の発酵弁当</small>
              </p>
              <a href={STORES_BOOK_URL}>予約</a>
            </div>
            <div className="lesson">
              <img src="/assets/media/lesson_4577.JPG" alt="レッスン" />
              <p>
                レッスン
                <br />
                <small>旬の野菜と発酵を学べるヴィーガン料理</small>
              </p>
              <a href={STORES_BOOK_URL}>予約</a>
            </div>
          </div>
        </section>

        {/* ここから News を「実際のインスタ投稿埋め込み」に変更 */}
        <section id="news" style={{ maxWidth: 1100, margin: "40px auto", padding: "0 20px" }}>
          <h2 className="section-title">News</h2>

          <div className="igGrid">
            {instagramPostUrls.map((url) => (
              <div className="igCard" key={url}>
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{ background: "#fff", border: 0, margin: 0, padding: 0, width: "100%" }}
                />
              </div>
            ))}
          </div>
        </section>
        {/* ここまで */}
      </main>
    </>
  );
}
