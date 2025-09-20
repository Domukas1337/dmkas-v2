import LoadingCard from "@/components/LoadingCard";

export default function Loading() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center mt-20 w-screen">
      <div className="flex flex-row justify-between items-center mx-14 md:mx-2 mb-4">
        <h1 className="text-xl font-black uppercase">Current season</h1>
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-4">
        {Array.from({ length: 15 }).map((_, index) => {
          return <LoadingCard key={index} />;
        })}
      </div>
      <div className="flex flex-row justify-between items-center mx-14 md:mx-2 mt-4 mb-4">
        <h1 className="text-xl font-black uppercase">Upcoming season</h1>
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-4">
        {Array.from({ length: 15 }).map((_, index) => {
          return <LoadingCard key={index} />;
        })}
      </div>
      <div className="flex flex-row justify-between items-center mx-14 md:mx-2 mt-4 mb-2">
        <h1 className="text-xl font-black uppercase">Top 100</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:mx-2">
        {Array.from({ length: 10 }).map((_, index) => {
          return <LoadingCard key={index} />;
        })}
      </div>
    </div>
  );
}
