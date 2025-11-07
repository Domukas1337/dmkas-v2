import {
  getAnimeBySearch,
  getCurrentSeason,
  getTopAnime,
  getUpcomingSeason,
} from "@/api/dataAnime";

import type { Anime } from "@/types/Anime";

import Link from "next/link";

import AnimeCard from "@/components/AnimeCard";
import SearchAnime from "@/components/Search";
import TopAnimeCard from "@/components/TopAnimeCard";

interface AnimePageProps {
  searchParams: Promise<{
    q?: string;
    genre?: string;
    year?: string;
    status?: string;
  }>;
}

export async function AnimeDefaultPage() {
  const currentSeason = await getCurrentSeason();
  const upcomingSeason = await getUpcomingSeason();
  const topAnime = await getTopAnime({
    limit: 15,
  });

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center items-center mx-14 md:mx-2 mb-4">
          <h1 className="text-2xl font-black uppercase">Current season</h1>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-4">
          {currentSeason.map((anime: Anime, index: number) => {
            return <AnimeCard key={index} {...anime} />;
          })}
        </div>
        <div className="flex flex-row justify-center items-center mx-14 md:mx-2 mt-12 mb-4">
          <h1 className="text-2xl font-black uppercase">Upcoming season</h1>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-4">
          {upcomingSeason.map((anime: Anime, index: number) => {
            return <AnimeCard key={index} {...anime} />;
          })}
        </div>
        <div className="flex flex-row justify-between items-center mx-14 md:mx-2 mt-4 mb-2">
          <h1 className="text-2xl font-black uppercase">Top 100</h1>
          <Link
            href="/search/anime/top"
            className="text-text hover:text-accent transition-colors duration-150"
          >
            See more
          </Link>
        </div>
        <div className="flex flex-col justify-center flex-wrap gap-2 mx-2 md:mx-20">
          {topAnime.map((anime: Anime, index: number) => {
            return <TopAnimeCard key={index} {...anime} />;
          })}
        </div>
      </div>
    </div>
  );
}

async function AnimeResults({ searchParams }: AnimePageProps) {
  const params = await searchParams;
  const search = params.q || "";
  const genre = Number(params.genre) || 0;
  const year = params.year || "";
  const status = params.status || "";

  if (!search && !genre && !year && !status) {
    return <AnimeDefaultPage />;
  }

  const animes = await getAnimeBySearch({ search, genre, year, status });

  return (
    <div className="flex flex-wrap justify-center items-stretch gap-10 mx-0 md:mx-20">
      {animes.length === 0 ? (
        <h1 className="text-2xl font-bold">No results :{"("}</h1>
      ) : (
        animes.map((anime: Anime, index: number) => (
          <AnimeCard key={index} {...anime} />
        ))
      )}
    </div>
  );
}

export default async function Anime({ searchParams }: AnimePageProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-20 w-screen">
      <SearchAnime />
      <AnimeResults searchParams={searchParams} />
    </div>
  );
}
