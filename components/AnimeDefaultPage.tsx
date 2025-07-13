"use client";

import {
  getCurrentSeason,
  getTopAnime,
  getUpcomingSeason,
} from "@/app/api/dataAnime";
import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import type { Anime, TopAnime } from "@/app/types/Anime";
import Link from "next/link";
import TopAnimeCard from "@/components/TopAnimeCard";
import Spinner from "./Spinner";

// TODO: add top anime that leads to the top page (50% done)

export default function AnimeDefaultPage() {
  const [currentSeason, setCurrentSeason] = useState([]);
  const [upcomingSeason, setUpcomingSeason] = useState([]);
  const [topAnime, setTopAnime] = useState([]);

  const [loadingCurrentSeason, setIsLoadingCurrentSeason] = useState(true);
  const [loadingUpcomingSeason, setIsLoadingUpcomingSeason] = useState(true);
  const [loadingTop, setLoadingTop] = useState(true);

  useEffect(() => {
    async function fetch() {
      const currentSeasonData = await getCurrentSeason({ limit: 10 });
      setCurrentSeason(currentSeasonData);
      setIsLoadingCurrentSeason(false);

      const upcomingSeasonData = await getUpcomingSeason({ limit: 10 });
      setUpcomingSeason(upcomingSeasonData);
      setIsLoadingUpcomingSeason(false);

      const topAnimeData = await getTopAnime({ limit: 10 });
      setTopAnime(topAnimeData);
      setLoadingTop(false);
    }
    fetch();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center mx-14 md:mx-2 mb-2">
          <h1 className="text-xl font-black uppercase">Current season</h1>
          <Link
            href="/search/anime/current"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-150"
          >
            See more
          </Link>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-4">
          {loadingCurrentSeason ? (
            <Spinner />
          ) : (
            currentSeason.map((anime: Anime, index: number) => {
              if (index >= 5) {
                return;
              }
              return <AnimeCard key={index} {...anime} />;
            })
          )}
        </div>
        <div className="flex flex-row justify-between items-center mx-14 md:mx-2 mt-4 mb-2">
          <h1 className="text-xl font-black uppercase">Upcoming season</h1>
          <Link
            href="/search/anime/upcoming"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-150"
          >
            See more
          </Link>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-4">
          {loadingUpcomingSeason ? (
            <Spinner />
          ) : (
            upcomingSeason.map((anime: Anime, index: number) => {
              if (index >= 5) {
                return;
              }
              return <AnimeCard key={index} {...anime} />;
            })
          )}
        </div>
        <div className="flex flex-row justify-between items-center mx-14 md:mx-2 mt-4 mb-2">
          <h1 className="text-xl font-black uppercase">Top 100</h1>
          <Link
            href="/search/anime/upcoming"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-150"
          >
            See more
          </Link>
        </div>
        <div className="flex flex-col justify-center flex-wrap gap-2 mx-2 md:mx-20">
          {loadingTop ? (
            <Spinner />
          ) : (
            topAnime.map((anime: TopAnime, index: number) => {
              return <TopAnimeCard key={index} {...anime} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}
