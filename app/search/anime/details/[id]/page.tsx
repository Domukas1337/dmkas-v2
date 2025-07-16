import { getAnimeDetails } from "@/app/api/dataAnime";
import { getReviews } from "@/app/api/dataReviews";
import { AnimeReviews } from "@/app/types/AnimeReviews";
import AnimeDetails from "@/components/AnimeDetails";
import Review from "@/components/Review";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  return {
    title: `${id}`,
  };
}

export default async function AnimeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const data = await getAnimeDetails({ id: Number(id) });
  const reviews = await getReviews(Number(id));

  return (
    <div className="flex flex-row flex-wrap mx-2 md:mx-10 mt-24 mb-2 bg-gray-800 rounded-lg">
      <AnimeDetails {...data} />
      <div className="flex flex-col">
        {!reviews.data ? (
          <p>No reviews</p>
        ) : (
          reviews.data.map((review: AnimeReviews, index: number) => (
            <Review key={index} review={review} />
          ))
        )}
      </div>
    </div>
  );
}
