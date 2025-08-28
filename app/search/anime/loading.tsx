import LoadingCard from "@/components/LoadingCard";

export default function Loading() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center mt-20 w-screen">
      {Array.from({ length: 12 }).map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
}
