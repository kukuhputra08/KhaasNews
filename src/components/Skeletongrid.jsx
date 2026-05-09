import SkeletonCard from "./SkeletonCard";

function SkeletonGrid() {
  return (
    <section className="news-grid">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </section>
  );
}

export default SkeletonGrid;