import { getAnimeCharacters, getAnimeDetails } from "@/api/dataAnime";
import { getAnimeReviews } from "@/api/dataReviews";
import AnimeDetails from "@/components/AnimeDetails";
import CharacterCard from "@/components/CharacterCard";
import { InfiniteReviewsAnime } from "@/components/InfiniteReviews";
import { Character } from "@/types/Character";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const data = await getAnimeDetails({ id: Number(id) });
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
  // const [data, initialReviews] = await Promise.all([
  //   getAnimeDetails({ id: Number(params.id) }),
  //   getAnimeReviews(Number(params.id), 1),
  // ]);
  const data = await getAnimeDetails({ id: Number(id) });
  const initialReviews = await getAnimeReviews(Number(id), 1);
  const characters = await getAnimeCharacters({ id: Number(id) });

  return (
    <div className="flex flex-col flex-wrap mx-2 md:mx-10 mt-24 mb-2 bg-zinc-900/50 border border-zinc-700 rounded-md">
      <AnimeDetails {...data} />
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
      <div className="flex flex-col justify-center items-center mb-2">
        <h1 className="text-3xl font-bold">Reviews</h1>
        <InfiniteReviewsAnime
          id={Number(id)}
          initialReviews={initialReviews.data || []}
        />
      </div>
    </div>
  );
}
