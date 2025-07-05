"use client";

import { getCurrentSeason, getUpcomingSeason } from "@/app/api/dataAnime";
import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import Anime from "@/app/types/Anime";
import Link from "next/link";

// TODO: add upcoming next season anime (doing this now)
// TODO: add top anime that leads to the top page

export default function AnimeDefaultPage() {
  const [currentSeason, setCurrentSeason] = useState([]);
  const [upcomingSeason, setUpcomingSeason] = useState([]);

  useEffect(() => {
    async function fetch() {
      const currentSeasonData = await getCurrentSeason({ limit: 10 });

      setCurrentSeason(currentSeasonData);

      const upcomingSeasonData = await getUpcomingSeason({ limit: 10 });
      setUpcomingSeason(upcomingSeasonData);
    }
    fetch();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center mx-2 md:mx-10 mb-2">
          <h1 className="text-xl font-black">Current season</h1>
          <Link
            href="/search/current"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-150"
          >
            See more
          </Link>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-4">
          {currentSeason.map((anime: Anime, index: number) => {
            if (index >= 5) {
              return;
            }
            return <AnimeCard key={index} {...anime} />;
          })}
        </div>
        <div className="flex flex-row justify-between items-center mx-2 md:mx-10 mt-4 mb-2">
          <h1 className="text-xl font-black">Upcoming season</h1>
          <Link
            href="/search/current"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-150"
          >
            See more
          </Link>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-4">
          {upcomingSeason.map((anime: Anime, index: number) => {
            if (index >= 5) {
              return;
            }
            return <AnimeCard key={index} {...anime} />;
          })}
        </div>
      </div>
    </div>
  );
}
