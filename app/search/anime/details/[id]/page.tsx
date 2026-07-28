import {
  getAnimeCharacters,
  getAnimeDetails,
  getAnimeRelations,
} from "@/api/dataAnime";
import { getAnimeReviews } from "@/api/dataReviews";
import AnimeCard from "@/components/AnimeCard";
import AnimeDetails from "@/components/AnimeDetails";
import CharacterCard from "@/components/CharacterCard";
import { InfiniteReviewsAnime } from "@/components/InfiniteReviews";
import { Anime } from "@/types/Anime";
import { Character } from "@/types/Character";
import { Relations } from "@/types/Relations";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const data = await getAnimeDetails({ id: Number(id) });
  return {
    title: `${data.title} | DMKAS`,
  };
}

export default async function AnimeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  // const [data, initialReviews, characters, relationsData] = await Promise.all([
  //   getAnimeDetails({ id: Number(params.id) }),
  //   getAnimeReviews(Number(params.id), 1),
  //   getAnimeCharacters({ id: Number(params.id) }),
  //   getAnimeRelations({ id: Number(params.id) }),
  // ]);
  const data = await getAnimeDetails({ id: Number(id) });
  const initialReviews = await getAnimeReviews(Number(id), 1);
  const characters = await getAnimeCharacters({ id: Number(id) });
  const relationsData = await getAnimeRelations({ id: Number(id) });

  if (!data) {
    return (
      <div className="flex flex-col flex-wrap mx-2 md:mx-10 mt-24 mb-2 bg-zinc-900/50 border border-zinc-700 rounded-md">
        <h1 className="text-3xl font-bold text-center">
          Anime not found or failed to load
        </h1>
      </div>
    );
  }

  const relationsId = relationsData.map((relation: Relations) => {
    return relation.entry[0].mal_id;
  });

  const relations = await Promise.all(
    relationsId.map((id: number) => getAnimeDetails({ id })),
  );

  return (
    <div className="flex flex-col flex-wrap mx-2 md:mx-10 mt-24 mb-2 bg-zinc-900/50 border border-zinc-700 rounded-md">
      <AnimeDetails {...data} />
      {characters && (
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-3xl font-bold text-center">Characters</h1>
          <div className="flex [scrollbar-width:1px] overflow-x-scroll whitespace-nowrap gap-2 p-2">
            {characters.map((character: Character, index: number) => {
              if (!character) return null;
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
      {relations && (
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-3xl font-bold text-center">Relations</h1>
          <div className="flex whitespace-nowrap gap-2 p-2">
            {relations.map((anime: Anime, index: number) => {
              if (!anime) return null;
              return <AnimeCard {...anime} key={index} />;
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
