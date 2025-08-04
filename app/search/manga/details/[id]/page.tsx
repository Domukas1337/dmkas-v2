import { getMangaDetails } from "@/app/api/dataManga";
import { getMangaReviews } from "@/app/api/dataReviews";

import { InfiniteReviewsManga } from "@/components/InfiniteReviews";
import MangaDetails from "@/components/MangaDetails";

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

  return (
    <div className="flex flex-col flex-wrap mx-2 md:mx-10 mt-24 mb-2 bg-gray-800/30 rounded-lg">
      <MangaDetails {...data} />
      <div className="flex flex-col justify-center items-center mb-2">
        <h1 className="text-3xl font-bold">Reviews</h1>
        <InfiniteReviewsManga
          id={Number(id)}
          initialReviews={initialReviews.data || []}
        />
      </div>
    </div>
  );
}
