"use client";

import { useEffect, useState } from "react";
import "./deli.css";

// microCMS から返ってくる1件分の型
type DeliMenuItem = {
  id: string;
  title: string;
  desc: string;
  price: string;
  note: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
};

export default function DeliPage() {
  const ORDER_URL = "https://stores.jp/your-store/deli";
  const heroImage = "/assets/media/deli1-3.jpg";

  const [menuItems, setMenuItems] = useState<DeliMenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("/api/deli-menu");
        if (!res.ok) {
          throw new Error("Failed to fetch /api/deli-menu");
        }
        const data = (await res.json()) as DeliMenuItem[];
        setMenuItems(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

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
            野菜ソムリエプロ、J-Veganist、発酵料理士インストラクター、発酵ごはんとお菓子のmadoi認定講師のオーナーが野菜と豆のおかずを発酵調味料を使って調理したお弁当を販売します。<br />
            完全ヴィーガン（動物性のものをいっさい含まない）またはゆるヴィーガン（卵や調味料の一部に動物性のものを使用）<br />
            ほぼ週替わりで提供します。通常おかずの種類は５〜７品です。
          </p>
        </section>

        <section id="menu" className="section">
          <h2 className="secTitle">メニュー</h2>

          {loading && <p>メニューを読み込み中です…</p>}

          {!loading && (
            <>
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
            </>
          )}
        </section>

        <section id="order" className="section">
          <div className="ctaCard">
            <div className="ctaText">
              <h2 className="secTitle">注文・決済</h2>
              <p>
                個数・受け取り日時をお選びのうえ、ご注文ください。外部サイトに遷移します。
              </p>
            </div>
            <div className="ctaBtns">
              <a
                className="btnPrimary"
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                注文する
              </a>
              <a className="btnGhost" href="mailto:info@example.com">
                メールで問い合わせ
              </a>
            </div>
          </div>
        </section>

        <section id="policy" className="section">
          <h2 className="secTitle">キャンセルポリシー</h2>
          <div className="policyCard">
            <ul>
              <li>受け取り２日前正午まで：無料</li>
              <li>
                予約＝決済となりますが３日前までにキャンセルのご連絡を受けた場合返金いたします。<br />
                決済方法により返金手数料をご負担いただく場合がございます。
              </li>
              <li>２日前正午〜当日：商品代金の 100%</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
