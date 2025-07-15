import { getAnimeDetails } from "@/app/api/dataAnime";
import AnimeDetails from "@/components/AnimeDetails";

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

  return (
    <div className="flex justify-center items-center h-screen">
      <AnimeDetails {...data} />
    </div>
  );
}
