import {
  getCurrentSeason,
  getTopAnime,
  getUpcomingSeason,
} from "@/app/api/dataAnime";
import AnimeCard from "./AnimeCard";
import type { Anime } from "@/app/types/Anime";
import Link from "next/link";
import TopAnimeCard from "@/components/TopAnimeCard";

export default async function AnimeDefaultPage() {
  const currentSeason = await getCurrentSeason();
  const upcomingSeason = await getUpcomingSeason();
  const topAnime = await getTopAnime({
    limit: 15,
  });

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center items-center mx-14 md:mx-2 mb-4">
          <h1 className="text-xl font-black uppercase">Current season</h1>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-4">
          {currentSeason.map((anime: Anime, index: number) => {
            return <AnimeCard key={index} {...anime} />;
          })}
        </div>
        <div className="flex flex-row justify-center items-center mx-14 md:mx-2 mt-12 mb-4">
          <h1 className="text-xl font-black uppercase">Upcoming season</h1>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-4">
          {upcomingSeason.map((anime: Anime, index: number) => {
            return <AnimeCard key={index} {...anime} />;
          })}
        </div>
        <div className="flex flex-row justify-between items-center mx-14 md:mx-2 mt-4 mb-2">
          <h1 className="text-xl font-black uppercase">Top 100</h1>
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
