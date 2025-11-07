import type { Anime } from "@/types/Anime";

export async function getAnimeBySearch({
  search,
  genre,
  year,
  status,
}: {
  search: string;
  genre: number;
  year: string;
  status: string;
}) {
  if (!year) {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&genres=${genre}&status=${status}`
    );
    const data = await res.json();

    const uniqueData = data.data.filter(
      (item: Anime, index: number) =>
        data.data.findIndex((i: Anime) => i.mal_id === item.mal_id) === index
    );

    return uniqueData;
  } else {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&genres=${genre}&start_date=${`${year}-01-01`}&end_date=${`${year}-12-31`}&status=${status}`
    );

    const data = await res.json();

    const uniqueData = data.data.filter(
      (item: Anime, index: number) =>
        data.data.findIndex((i: Anime) => i.mal_id === item.mal_id) === index
    );

    return uniqueData;
  }
}

export async function getCurrentSeason() {
  const res = await fetch(`https://api.jikan.moe/v4/seasons/now`, {
    cache: "force-cache",
    next: { revalidate: 3000 },
  });
  const data = await res.json();

  const uniqueData = data.data.filter(
    (item: Anime, index: number) =>
      data.data.findIndex((i: Anime) => i.mal_id === item.mal_id) === index
  );

  return uniqueData;
}

export async function getUpcomingSeason() {
  const res = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`, {
    cache: "force-cache",
    next: { revalidate: 3000 },
  });

  const data = await res.json();

  const uniqueData = data.data.filter(
    (item: Anime, index: number) =>
      data.data.findIndex((i: Anime) => i.mal_id === item.mal_id) === index
  );

  return uniqueData;
}

export async function getTopAnime({
  limit,
  page,
}: {
  limit?: number;
  page?: number;
}) {
  const res = await fetch(
    `https://api.jikan.moe/v4/top/anime?limit=${limit}&page=${page}&sort=rank&type=tv`,
    {
      cache: "force-cache",
      next: { revalidate: 3000 },
    }
  );
  const data = await res.json();
  // return data.data;

  // This had to be added because api gave repeated animes
  const uniqueData = data.data.filter(
    (item: Anime, index: number) =>
      data.data.findIndex((i: Anime) => i.mal_id === item.mal_id) === index
  );
  // Sort from highest to lowest
  const sortedData = uniqueData.sort((a: Anime, b: Anime) => a.rank - b.rank);

  return sortedData;
}

export async function getAnimeDetails({ id }: { id: number }) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return data.data;
}
