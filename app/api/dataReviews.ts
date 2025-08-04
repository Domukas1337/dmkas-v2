export async function getAnimeReviews(animeId: number, page: number = 1) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${animeId}/reviews?page=${page}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { data: [] };
  }
}
export async function getMangaReviews(animeId: number, page: number = 1) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/manga/${animeId}/reviews?page=${page}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { data: [] };
  }
}
