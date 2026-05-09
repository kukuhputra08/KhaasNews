import { useEffect, useMemo, useState } from "react";
import { categories } from "../data/categories";
import { getNews } from "../services/newsAPI";
import Navbar from "../components/Navbar";
import CategoryFilter from "../components/CategoryFilter";
import HeroNews from "../components/HeroNews";
import NewsGrid from "../components/NewsGrid";
import SkeletonGrid from "../components/Skeletongrid";
import Footer from "../components/Footer";

function Home() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [news, setNews] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  async function fetchNews() {
    try {
      setLoading(true);
      setErrorMessage("");

      const data = await getNews(activeCategory.source, activeCategory.type);
      setNews(data);
      setVisibleCount(6);
    } catch {
      setErrorMessage("Berita gagal dimuat. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, [activeCategory]);

  const filteredNews = useMemo(() => {
    return news.filter((item) =>
      item.title?.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }, [news, searchKeyword]);

  const headline = filteredNews[0];
  const otherNews = filteredNews.slice(1, visibleCount+1);
  const hasMorePage = visibleCount < filteredNews.length;



  return (
    <main className="app">
      <Navbar
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <section className="section-heading">
        <div>
          <p>Top Stories</p>
          <h2>{activeCategory.label}</h2>
        </div>
      </section>

      {loading && (
        <>
            <section className="hero-card skeleton-hero">
                <div className="hero-content">
                    <div className="skeleton-line skeleton-small"></div>
                    <div className="skeleton-line skeleton-heading"></div>
                    <div className="skeleton-line"></div>
                    <div className="skeleton-line skeleton-short"></div>
                </div>

                <div className="skeleton-image hero-skeleton-image"></div>
            </section>

        <SkeletonGrid />
        </>
      )}

      {errorMessage && <p className="status error">{errorMessage}</p>}

      {!loading && !errorMessage && filteredNews.length === 0 && (
        <p className="status">Tidak ada berita ditemukan.</p>
      )}

      {!loading && !errorMessage && headline && (
        <>
          <HeroNews headline={headline} activeCategory={activeCategory} />

          <NewsGrid news={otherNews} categoryLabel={activeCategory.label} />
          {hasMorePage && (
            <div className="load-more-wrapper">
                <button className="load-more-button" onClick={() => setVisibleCount((prevCount)=>prevCount+6)}>Muat Lebih Banyak</button>
            </div>
          )}
        </>
      )}
     
      <Footer/>
    </main>
  );
}

export default Home;
