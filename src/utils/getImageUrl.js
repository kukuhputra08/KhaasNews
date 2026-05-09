export function getImageUrl(image) {
  if (!image) {
    return "/placeholder-news.jpg";
  }

  if (typeof image === "string") {
    return image;
  }

  if (typeof image === "object") {
    return image.large || image.small || "/placeholder-news.jpg";
  }

  return "/placeholder-news.jpg";
}