"use client";

import { getCurrentSeason } from "@/app/api/dataAnime";
import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import Anime from "@/app/types/Anime";
import Link from "next/link";

// TODO: add "popular this season" if possible
// TODO: add upcoming next season anime
// TODO: add top anime that leads to the top page

export default function AnimeDefaultPage() {
  const [currentSeason, setCurrentSeason] = useState([]);

  useEffect(() => {
    async function fetch() {
      const data = await getCurrentSeason({ limit: 5 });
      console.log(data);
      setCurrentSeason(data.data);
    }
    fetch();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center mx-10">
          <h1 className="text-2xl">Current season</h1>
          <Link
            href="/search/current"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-150"
          >
            See more
          </Link>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-2">
          {currentSeason.map((anime: Anime, index: number) => {
            return <AnimeCard key={index} {...anime} />;
          })}
        </div>
      </div>
    </div>
  );
}
