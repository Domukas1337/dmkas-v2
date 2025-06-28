"use client";
import { getAnime } from "@/app/api/dataAnime";
import type Anime from "@/app/types/Anime";
import AnimeCard from "@/components/AnimeCard";
import SearchAnime from "@/components/Search";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Anime() {
  const params = useSearchParams();
  const search = params.get("q") || "";
  const genre = Number(params.get("genre")) || 0;
  const year = params.get("year") || "";
  const status = params.get("status") || "";

  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    async function fetch() {
      if (!search) {
        return;
      }
      const data = await getAnime({ search, genre, year, status });
      console.log(data);

      setAnimes(data.data);
    }

    fetch();
  }, [search, genre, year, status]);
  return (
    <div className="flex flex-col justify-center items-center mt-20 w-screen">
      <SearchAnime />
      <div className="flex flex-row flex-wrap justify-center">
        {!animes.length ? (
          <h1 className="text-2xl">No results found</h1>
        ) : (
          <div className="flex flex-wrap gap-2">
            {animes.map((anime: Anime, index: number) => (
              <AnimeCard key={index} {...anime} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
