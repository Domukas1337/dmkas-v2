export async function getAnime({
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
    return data;
  } else {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&genres=${genre}&start_date=${`${year}-01-01`}&end_date=${`${year}-12-31`}&status=${status}`
    );

    const data = await res.json();

    return data;
  }
}
