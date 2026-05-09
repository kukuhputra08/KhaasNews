import { Link } from "react-router-dom";
import { getImageUrl } from "../utils/getImageUrl";

function HeroNews({ headline, activeCategory }) {
  if (!headline) {
    return null;
  }
  const imageUrl = getImageUrl(headline.image);

  return (
    <section className="hero-card">
      <div className="hero-content">
        <span className="tag">{activeCategory.label}</span>
        <h2>{headline.title}</h2>
        <p>{headline.contentSnippet || "Baca berita selengkapnya."}</p>

        <Link to="/detail" state={{ news: headline }}>
          Baca selengkapnya
        </Link>
      </div>

      <img src={imageUrl} alt={headline.title} />
    </section>
  );
}

export default HeroNews;