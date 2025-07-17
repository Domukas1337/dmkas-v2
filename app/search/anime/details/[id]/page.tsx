import { getAnimeDetails } from "@/app/api/dataAnime";
import { getReviews } from "@/app/api/dataReviews";
import AnimeDetails from "@/components/AnimeDetails";
import InfiniteReviews from "@/components/InfiniteReviews";

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
  const data = await getAnimeDetails({ id: Number(id) });
  // Get initial reviews (page 1)
  const initialReviews = await getReviews(Number(id), 1);

  return (
    <div className="flex flex-col flex-wrap mx-2 md:mx-10 mt-24 mb-2 bg-gray-800 rounded-lg">
      <AnimeDetails {...data} />
      <div className="flex flex-col justify-center items-center mb-2">
        <h1 className="text-3xl font-bold">Reviews</h1>
        <InfiniteReviews
          animeId={Number(id)}
          initialReviews={initialReviews.data || []}
        />
      </div>
    </div>
  );
}
