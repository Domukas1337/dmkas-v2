import { getMangaCharacters, getMangaDetails } from "@/api/dataManga";
import { getMangaReviews } from "@/api/dataReviews";
import CharacterCard from "@/components/CharacterCard";

import { InfiniteReviewsManga } from "@/components/InfiniteReviews";
import MangaDetails from "@/components/MangaDetails";
import { Character } from "@/types/Character";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const data = await getMangaDetails({ id: Number(id) });
  return {
    title: `${data.title}`,
  };
}

export default async function AnimeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const data = await getMangaDetails({ id: Number(id) });
  // Get initial reviews (page 1)
  const initialReviews = await getMangaReviews(Number(id), 1);
  const characters = await getMangaCharacters({ id: Number(id) });

  return (
    <div className="flex flex-col flex-wrap mx-2 md:mx-10 mt-24 mb-2 bg-gray-800/30 rounded-lg">
      <MangaDetails {...data} />

      {characters && (
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-3xl font-bold text-center">Characters</h1>
          <div className="flex [scrollbar-width:1px] overflow-x-scroll whitespace-nowrap gap-2 p-2">
            {characters.map((character: Character, index: number) => {
              return (
                <CharacterCard
                  key={index}
                  character={character.character}
                  role={character.role}
                  favorites={character.favorites}
                />
              );
            })}
          </div>
        </div>
      )}
      <h1 className="text-3xl font-bold">Reviews</h1>
      <InfiniteReviewsManga
        id={Number(id)}
        initialReviews={initialReviews.data || []}
      />
    </div>
  );
}
