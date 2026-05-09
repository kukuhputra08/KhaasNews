import { Link } from "react-router-dom";
import { getImageUrl } from "../utils/getImageUrl";

function NewsCard({ item, categoryLabel }) {
  const imageUrl = getImageUrl(item.image);

  return (
    <article className="news-card">
      <img src={imageUrl} alt={item.title} />

      <div className="news-card-body">
        <span>{categoryLabel}</span>
        <h3>{item.title}</h3>
        <p>{item.contentSnippet || "Klik untuk membaca berita ini."}</p>

        <Link to="/detail" state={{ news: item }}>
          Baca berita
        </Link>
      </div>
    </article>
  );
}

export default NewsCard;