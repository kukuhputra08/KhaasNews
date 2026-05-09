function SkeletonCard() {
  return (
    <article className="skeleton-card">
      <div className="skeleton-image"></div>

      <div className="skeleton-body">
        <div className="skeleton-line skeleton-small"></div>
        <div className="skeleton-line skeleton-title"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line skeleton-short"></div>
      </div>
    </article>
  );
}

export default SkeletonCard;