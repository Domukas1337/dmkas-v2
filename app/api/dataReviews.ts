export async function getReviews(animeId: number, page: number = 1) {
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
