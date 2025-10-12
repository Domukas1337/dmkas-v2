import { getMangaBySearch } from "@/app/api/dataManga";
import { Manga } from "@/app/types/Manga";
import MangaCard from "@/components/MangaCard";
import { SearchManga } from "@/components/Search";

interface MangaPageProps {
  searchParams: Promise<{
    q?: string;
    genre?: string;
    // year?: string;
    format?: string;
    status?: string;
  }>;
}

async function MangaResults({ searchParams }: MangaPageProps) {
  const params = await searchParams;
  const search = params.q || "";
  const genre = Number(params.genre) || 0;
  const format = params.format || "";
  // const year = params.year || "";
  const status = params.status || "";

  if (!search && !genre && !format && !status) {
    return (
      <div>
        <h1 className="text-xl font-bold text-center">
          Search your favorite manga. For example:{" "}
          <span className="text-accent">
            The Fragrant Flower blooms with dignity.
          </span>
        </h1>
      </div>
    );
  }

  const animes = await getMangaBySearch({ search, genre, format, status });

  return (
    <div className="flex flex-wrap justify-center items-stretch gap-10 mx-0 md:mx-20">
      {animes.length === 0 ? (
        <h1 className="text-2xl font-bold">No results :{"("}</h1>
      ) : (
        animes.map((anime: Manga, index: number) => (
          <MangaCard key={index} {...anime} />
        ))
      )}
    </div>
  );
}

export default function MangaPage({ searchParams }: MangaPageProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-20 w-screen">
      <SearchManga />
      <MangaResults searchParams={searchParams} />
    </div>
  );
}
