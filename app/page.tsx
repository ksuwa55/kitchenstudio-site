"use client";

export default function Home() {
  // TODO: replace with your real URLs
  const STORES_BOOK_URL = 'https://stores.jp/your-shop/booking';
  const INSTAGRAM_URL = 'https://www.instagram.com/your_account/';

  return (
    <>
      {/* hero section */}
      <section className="hero heroGradient" aria-label="Hero">
        <div className="heroVideoWrap" aria-hidden>
          <video autoPlay muted loop playsInline poster="/assets/media/poster.jpg">
            <source src="/assets/media/miyabisai.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="heroInner">
          <div className="siteTitle">
            <a href="/"><h1>雅菜</h1></a>
          </div> 
        </div>
      </section>

      <main>
        <section id="concept" style={{maxWidth: 1100, margin: '40px auto', padding: '0 20px'}}>
          <h2 className="section-title">コンセプト</h2>
          <p>豊かな「食」と仲間との語らいは、人を笑顔にします。 私たちが考える豊かな「食」とは、大地と太陽の恵みをいっぱいに受けた産物から生まれた作物と、健康な体へと導く酵素の働きを享受することです。 この理想を叶えるため、「野菜」と「発酵」をテーマにしたキッチンアトリエ「みやびさい」を設立しました。
「野菜」は、お腹を満たし栄養を摂るだけでなく、旬を感じることで心にも栄養を与えてくれます。 そして「発酵」は、私たち日本人が古くから生活に取り入れてきた大切な知恵で元となる食品をさらに有益にしてくれます。 さまざまな食製品があふれる現代だからこそ、この先人たちの知恵を活かした「手作りの食」を大切にしたいと私たちは考えています。
「みやびさい」が、皆さまの豊かな食生活と健康、そして笑顔を育むお手伝いができる場所となれば幸いです。
</p>
        </section>

        <section id="service" style={{maxWidth: 1100, margin: '40px auto', padding: '0 20px'}}>
          <h2 className="section-title">サービス</h2>
          <div className="service-grid">
            <div className="rental">
              <img src="/assets/media/studio2.jpg" alt="レンタルスペース" />
              <p>レンタルスペース<br/><small>ちいさなキッチンから、あなたのアイデアをかたちに。</small></p>
              <a href="#">予約</a>
            </div>
            <div className="deli">
              <img src="/assets/media/deli3−2.jpg" alt="デリ" />
              <p>デリ<br/><small>手づくりのやさしさを、今日の食卓に。</small></p>
              <a href="#">予約</a>
            </div>
            <div className="lesson">
              <img src="/assets/media/lesson_4577.JPG" alt="レッスン" />
              <p>レッスン<br/><small>気軽に学べる料理レッスン。</small></p>
              <a href="#">予約</a>
            </div>
          </div>
        </section>

        <section id="news" style={{ maxWidth: 1100, margin: '40px auto', padding: '0 20px' }}>
          <h2 className="section-title">
            News
          </h2>

          <div className="igGrid">
            <div className="igCard">
              <h3>今月のお知らせ</h3>
              <div className="igMeta">
                <img src="https://i.pravatar.cc/100?img=1" alt="avatar" />
                <div>
                  <div className="name">Name</div>
                  <div className="desc">Description</div>
                </div>
              </div>
            </div>

            <div className="igCard">
              <h3>レッスンレポート</h3>
              <div className="igMeta">
                <img src="https://i.pravatar.cc/100?img=2" alt="avatar" />
                <div>
                  <div className="name">Name</div>
                  <div className="desc">Description</div>
                </div>
              </div>
            </div>

            <div className="igCard">
              <h3>レッスンレポート</h3>
              <div className="igMeta">
                <img src="https://i.pravatar.cc/100?img=3" alt="avatar" />
                <div>
                  <div className="name">Name</div>
                  <div className="desc">Description</div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Instagram embed: paste a widget code here if needed */}
      </main>
    </>
  );
}
