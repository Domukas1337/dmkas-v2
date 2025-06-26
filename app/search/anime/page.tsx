"use client";
import { getAnime } from "@/app/actions/dataAnime";
import SearchAnime from "@/components/Search";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Anime() {
  const params = useSearchParams();
  const search = params.get("q") || "";
  const genre = Number(params.get("genre")) || 0;
  const year = params.get("year") || "";
  const status = params.get("status") || "";

  useEffect(() => {
    async function fetch() {
      if (!search) {
        return;
      }
      const data = await getAnime({ search, genre, year, status });
      console.log(data);
      return data;
    }

    fetch();
  }, [search, genre, year, status]);
  return (
    <div className="flex justify-center items-center h-screen">
      <SearchAnime />
    </div>
  );
}
