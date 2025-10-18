"use client";
import { useState, useEffect, useCallback } from "react";
import type { Anime } from "@/app/types/Anime";
import { getTopAnime } from "@/app/api/dataAnime";
import AnimeCard from "@/components/AnimeCard";
import LoadingCard from "@/components/LoadingCard";

const removeDuplicates = (animes: Anime[]): Anime[] => {
  const seen = new Set<number>();
  return animes.filter((anime) => {
    if (seen.has(anime.mal_id)) {
      return false;
    }
    seen.add(anime.mal_id);
    return true;
  });
};

export default function TopAnime() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  const loadAnimes = useCallback(
    async (pageNum: number, append: boolean = true) => {
      if (loading) return;
      setLoading(true);
      try {
        const response = await getTopAnime({
          limit: 25,
          page: pageNum,
        });
        if (response && response.length > 0) {
          let newAnimes = response;
          if (append && pageNum > 1) {
            newAnimes = removeDuplicates([...animes, ...response]);
          } else {
            newAnimes = removeDuplicates(response);
          }
          setAnimes(newAnimes);
          setPage(pageNum + 1);
          // Check if we've reached the end
          if (response.length < 25) {
            setHasMore(false);
          }
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error loading anime:", error);
      } finally {
        setLoading(false);
        setInitialLoad(false);
      }
    },
    [loading, animes]
  );

  // Load initial data
  useEffect(() => {
    loadAnimes(1, false);
  }, []);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 1000 &&
        !loading &&
        hasMore
      ) {
        loadAnimes(page);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadAnimes, page, loading, hasMore]);

  return (
    <div className="min-h-screen mt-24">
      <h1 className="text-3xl font-bold text-center mb-10">Top Anime</h1>
      {animes.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4">
          {animes.map((anime: Anime) => (
            <AnimeCard key={anime.mal_id} {...anime} />
          ))}
        </div>
      )}
      {loading && initialLoad && (
        <div className="flex flex-wrap justify-center gap-2 py-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <LoadingCard key={index} />
          ))}
        </div>
      )}
    </div>
  );
}
