import type { Anime } from "../types/Anime";

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
    cache: "default",
  });
  const data = await res.json();

  const uniqueData = data.data.filter(
    (item: Anime, index: number) =>
      data.data.findIndex((i: Anime) => i.mal_id === item.mal_id) === index
  );

  return uniqueData;
}

export async function getUpcomingSeason() {
  // artificial limit (need to remove)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`, {
    cache: "default",
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
  if (page) {
    const res = await fetch(
      `https://api.jikan.moe/v4/top/anime?limit=${limit}&page=${page}&sort=rank&type=tv`,
      {
        cache: "force-cache",
      }
    );
    const data = await res.json();
    // return data.data;
    const uniqueData = data.data.filter(
      (item: Anime, index: number) =>
        data.data.findIndex((i: Anime) => i.mal_id === item.mal_id) === index
    );
    const sortedData = uniqueData.sort((a: Anime, b: Anime) => a.rank - b.rank);

    return sortedData;
  } else {
    const res = await fetch(
      `https://api.jikan.moe/v4/top/anime?limit=${limit}`,
      {
        cache: "force-cache",
      }
    );
    const data = await res.json();
    const uniqueData = data.data.filter(
      (item: Anime, index: number) =>
        data.data.findIndex((i: Anime) => i.mal_id === item.mal_id) === index
    );

    const sortedData = uniqueData.sort((a: Anime, b: Anime) => a.rank - b.rank);

    return sortedData;
  }
}

export async function getAnimeDetails({ id }: { id: number }) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return data.data;
}
