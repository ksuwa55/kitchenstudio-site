import "./deli.css";

type DeliMenuItem = {
  id: string;
  title: string;
  desc: string;
  price: string;
  note: string;
  image?: { url: string; width: number; height: number };
  book_url?: string;
};

async function fetchMenu(): Promise<DeliMenuItem[]> {
  const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
  const API_KEY = process.env.MICROCMS_API_KEY;

  if (!SERVICE_DOMAIN || !API_KEY) {
    throw new Error("MICROCMS env missing");
  }

  const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/deli-menu?orders=order`;

  const res = await fetch(url, {
    headers: { "X-MICROCMS-API-KEY": API_KEY },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`microCMS not ok: ${res.status} ${text}`);
  }

  const data = await res.json();
  return (data.contents ?? []) as DeliMenuItem[];
}

export default async function DeliPage() {
  const heroImage = "/assets/media/deli1-3.jpg";

  const menuItems = await fetchMenu();

  return (
    <>
      <section className="hero heroGradient pageHero" aria-label="Hero">
        <div className="heroImageWrap" aria-hidden>
          <img src={heroImage} alt="デリのヒーローイメージ" />
        </div>
      </section>

      <main className="deliPage">
        <section id="concept" className="section">
          <h1 className="pageTitle">プラントベースデリ(要予約)</h1>
          <p className="lead">
            野菜ソムリエプロ、J-Veganist、発酵料理士インストラクター、発酵ごはんとお菓子のmadoi認定講師のオーナーが野菜と豆のおかずを発酵調味料を使って調理したお弁当を販売します。
            <br />
            フルヴィーガン（動物性のものをいっさい含まない）またはゆるヴィーガン（卵や調味料の一部に動物性のものを使用）
            <br />
            不定期にメニューを変えて提供します。通常おかずの種類は５〜７品です。
          </p>
        </section>

        <section id="menu" className="section">
          <h2 className="secTitle">メニュー</h2>

          <div className="menuGrid">
            {menuItems.map((m) => (
              <article key={m.id} className="menuCard">
                <div className="thumb">
                  {m.image && <img src={m.image.url} alt={m.title} />}
                </div>
                <div className="body">
                  <h3 className="title">{m.title}</h3>
                  <p className="desc">{m.desc}</p>
                  <div className="price">{m.price}</div>
                  {m.book_url && (
                    <a
                      className="btnPrimary"
                      href={m.book_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      予約する
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="priceList">
            <table className="priceTable" aria-label="メニュー価格表">
              <thead>
                <tr>
                  <th>メニュー</th>
                  <th>価格</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((row) => (
                  <tr key={row.id}>
                    <td>{row.title}</td>
                    <td>{row.price}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

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
      </main>
    </>
  );
}
