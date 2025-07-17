// import { AnimeReviews } from "../types/AnimeReviews";

// export async function getReviews(
//   id: number
// ): Promise<{ data: AnimeReviews[] }> {
//   const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/reviews`);

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   const result = await response.json();

//   return {
//     data: result.data,
//   };
// }

// Update your getReviews function to accept page parameter
export async function getReviews(
  animeId: number,
  page: number = 1,
  limit: number = 20
) {
  try {
    // Adjust this URL based on your API endpoint structure
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${animeId}/reviews?page=${page}&limit=${limit}`
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
