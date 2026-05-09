import NewsCard from "./NewsCard";

function NewsGrid({ news, categoryLabel }) {
  return (
    <section className="news-grid">
      {news.map((item, index) => (
        <NewsCard
          key={`${item.title}-${index}`}
          item={item}
          categoryLabel={categoryLabel}
        />
      ))}
    </section>
  );
}

export default NewsGrid;