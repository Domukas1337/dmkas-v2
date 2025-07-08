"use client";
import { getAnime } from "@/app/api/dataAnime";

import type { Anime } from "@/app/types/Anime";

import AnimeCard from "@/components/AnimeCard";
import SearchAnime from "@/components/Search";

import AnimeDefaultPage from "@/app/search/anime/AnimeDefaultPage";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Anime() {
  const params = useSearchParams();
  const search = params.get("q") || "";
  const genre = Number(params.get("genre")) || 0;
  const year = params.get("year") || "";
  const status = params.get("status") || "";

  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      if (!search) {
        return;
      }
      setLoading(true);
      const data = await getAnime({ search, genre, year, status });

      setAnimes(data.data);
      setLoading(false);
    }

    fetch();
  }, [search, genre, year, status]);
  return (
    <div className="flex flex-col justify-center items-center mt-20 w-screen">
      <SearchAnime />
      {!search ? (
        <AnimeDefaultPage />
      ) : !loading ? (
        <div className="flex flex-wrap justify-center gap-2">
          {animes.map((anime: Anime, index: number) => (
            <AnimeCard key={index} {...anime} />
          ))}
        </div>
      ) : (
        <h1 className="text-3xl font-bold">Loading...</h1>
      )}
    </div>
  );
}
