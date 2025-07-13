import { getAnime } from "@/app/api/dataAnime";
import type { Anime } from "@/app/types/Anime";
import AnimeCard from "@/components/AnimeCard";
import SearchAnime from "@/components/Search";
import AnimeDefaultPage from "@/components/AnimeDefaultPage";
import { Suspense } from "react";
import Loading from "./loading";

interface AnimePageProps {
  searchParams: Promise<{
    q?: string;
    genre?: string;
    year?: string;
    status?: string;
  }>;
}

async function AnimeResults({ searchParams }: AnimePageProps) {
  const params = await searchParams;
  const search = params.q || "";
  const genre = Number(params.genre) || 0;
  const year = params.year || "";
  const status = params.status || "";

  if (!search) {
    return <AnimeDefaultPage />;
  }

  const animes = await getAnime({ search, genre, year, status });

  return (
    <div className="flex flex-wrap justify-center items-stretch gap-10 mx-0 md:mx-20">
      {animes.map((anime: Anime, index: number) => (
        <AnimeCard key={index} {...anime} />
      ))}
    </div>
  );
}

export default async function Anime({ searchParams }: AnimePageProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-20 w-screen">
      <SearchAnime />
      <Suspense fallback={<Loading />}>
        <AnimeResults searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
