import { redirect } from "next/navigation";

export async function getAnimeReviews(animeId: number, page: number = 1) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${animeId}/reviews?page=${page}`
    );

    const data = await response.json();

    if (response.status !== 200) {
      console.log("DEBUG: ", data);
      redirect(`/error?message=${data.message}`);
    }

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

    const data = await response.json();

    if (response.status !== 200) {
      console.log("DEBUG: ", data);
      redirect(`/error?message=${data.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { data: [] };
  }
}
