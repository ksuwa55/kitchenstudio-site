export default function About() {
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

      </main>
    </>
  )
}