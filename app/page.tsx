import NewsSection from "./components/NewsSection";

type InstaNewsItem = {
  id: string;
  url: string;
  description: string;
};

export default async function Home() {

  let newsItems: InstaNewsItem[] = [];
  try {
    const res = await fetch("https://miyabisai.microcms.io/api/v1/instanews", {
      headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY! },
    });
    const data = await res.json();
    newsItems = data.contents ?? [];
  } catch (e) {
    console.error("Failed to fetch instanews:", e);
  }

  return (
    <>
      {/* hero section */}
      <section className="hero heroGradient" aria-label="Hero">
        <div className="heroVideoWrap" aria-hidden>
          <video autoPlay muted loop playsInline poster="/assets/media/poster.jpg">
            <source src="/assets/media/miyabisaiHP _movie.mp4" type="video/mp4" />
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
              <a href="/rental">詳しくはこちら</a>
            </div>
            <div className="deli">
              <img src="/assets/media/deli_home.jpg" alt="デリ" />
              <p>
                デリ
                <br />
                <small>植物由来の発酵弁当</small>
              </p>
              <a href="/deli">詳しくはこちら</a>
            </div>
            <div className="lesson">
              <img src="/assets/media/lesson_4577.JPG" alt="レッスン" />
              <p>
                レッスン
                <br />
                <small>旬の野菜と発酵を学べるヴィーガン料理</small>
              </p>
              <a href="/lesson">詳しくはこちら</a>
            </div>
          </div>
        </section>

        <section id="news" style={{ maxWidth: 1100, margin: "40px auto", padding: "0 20px" }}>
          <h2 className="section-title">News</h2>
          <NewsSection posts={newsItems} />
        </section>
      </main>
    </>
  );
}
