import { Manga } from "../types/Manga";

export async function getMangaBySearch({
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
      `https://api.jikan.moe/v4/manga?q=${search}&genres=${genre}&status=${status}`
    );
    const data = await res.json();

    const uniqueData = data.data.filter(
      (item: Manga, index: number) =>
        data.data.findIndex((i: Manga) => i.mal_id === item.mal_id) === index
    );

    return uniqueData;
  } else {
    const res = await fetch(
      `https://api.jikan.moe/v4/manga?q=${search}&genres=${genre}&start_date=${`${year}-01-01`}&end_date=${`${year}-12-31`}&status=${status}`
    );

    const data = await res.json();

    const uniqueData = data.data.filter(
      (item: Manga, index: number) =>
        data.data.findIndex((i: Manga) => i.mal_id === item.mal_id) === index
    );

    return uniqueData;
  }
}
