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
            <a href="/"><h1>Kitchen Studio</h1></a>
          </div> 
        </div>
      </section>

      <main>
        <section id="about" style={{maxWidth: 1100, margin: '40px auto', padding: '0 20px'}}>
          <h2>コンセプト</h2>
          <p>料理と人がつながる、ちいさな台所のある場所。上足洗レンタルスペースは、地域に開かれた「つくる」「あつまる」「たのしむ」空間です。</p>
        </section>

        <section id="rental" style={{maxWidth: 1100, margin: '40px auto', padding: '0 20px'}}>
          <h2>サービス</h2>
          <p>Rental details, price, and usage examples.</p>
        </section>

        <section id="rental" style={{maxWidth: 1100, margin: '40px auto', padding: '0 20px'}}>
          <h2>News</h2>
          <div className="igWrap">
            <h3>Instagram</h3>
            <p><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Open Instagram</a></p>
          </div>
        </section>

        {/* Instagram embed: paste a widget code here if needed */}
      </main>
    </>
  );
}
