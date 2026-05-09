import { Link, useLocation } from "react-router-dom";
import { getImageUrl } from "../utils/getImageUrl";

function Detail() {
  const location = useLocation();
  const news = location.state?.news;

  if (!news) {
    return (
      <main className="app">
        <section className="detail-empty">
          <h1>Berita tidak ditemukan</h1>
          <p>Silakan kembali ke halaman utama dan pilih berita lagi.</p>
          <Link to="/">Kembali ke beranda</Link>
        </section>
      </main>
    );
  }

  const imageUrl = getImageUrl(news.image);

  return (
    <main className="app">
      <Link className="back-link" to="/">
        ← Kembali
      </Link>

      <article className="detail-card">
        <span className="tag">Detail Berita</span>

        <h1>{news.title}</h1>

        <img src={imageUrl} alt={news.title} />

        <p className="detail-date">{news.isoDate || news.pubDate}</p>

        <p className="detail-content">
          {news.contentSnippet || "Ringkasan berita belum tersedia."}
        </p>

        <a
          className="source-link"
          href={news.link}
          target="_blank"
          rel="noreferrer"
        >
          Baca artikel asli
        </a>
      </article>
    </main>
  );
}

export default Detail;