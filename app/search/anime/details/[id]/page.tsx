import { getAnimeDetails } from "@/app/api/dataAnime";

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
  console.log(data);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1>{id}</h1>
    </div>
  );
}
