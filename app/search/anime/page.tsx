"use client";
import { getAnime } from "@/app/api/dataAnime";
import SearchAnime from "@/components/Search";
import Image from "next/image";

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

      setAnimes(data.data);
    }

    fetch();
  }, [search, genre, year, status]);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <SearchAnime />
      {!animes.length ? (
        <h1 className="text-2xl">No results found</h1>
      ) : (
        <div className="flex flex-col gap-2">
          {animes.map((anime: any, index: number) => (
            <div key={index} className="flex gap-2">
              <Image
                width={200}
                height={300}
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-20 h-32"
              />
              <div className="flex flex-col gap-2">
                <h1>{anime.title}</h1>
                <p>{anime.synopsis}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
