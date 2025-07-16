import { AnimeReviews } from "../types/AnimeReviews";

export async function getReviews(
  id: number
): Promise<{ data: AnimeReviews[] }> {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/reviews`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result = await response.json();

  return {
    data: result.data,
  };
}
