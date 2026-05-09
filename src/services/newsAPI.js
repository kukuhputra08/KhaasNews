const BASE_URL = "https://berita-indo-api-next.vercel.app/api";

export async function getNews(source, type) {
  const url = `${BASE_URL}/${source}/${type}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Gagal mengambil data berita");
  }

  const result = await response.json();

  return result.data || [];
}