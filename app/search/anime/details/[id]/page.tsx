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
  return (
    <div className="flex justify-center items-center h-screen">
      <h1>{id}</h1>
    </div>
  );
}
