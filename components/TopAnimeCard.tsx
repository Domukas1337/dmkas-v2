import type { TopAnime } from "@/app/types/Anime";
import Image from "next/image";
import Link from "next/link";

export default function TopAnimeCard({
  images,
  title,
  title_english,
  mal_id,
  genres,
  score,
  rank,
}: TopAnime) {
  return (
    <Link
      href={`/search/anime/details?id=${mal_id}`}
      className=" hover:scale-105 transition-all duration-200"
    >
      <div className="flex flex-row items-center m-2 gap-4 bg-gray-400/30 rounded-md p-2">
        <h1
          className={`text-xl font-black ml-2 ${
            rank === 1
              ? "text-yellow-300"
              : rank === 2
              ? "text-gray-300"
              : rank === 3
              ? "text-amber-600"
              : "text-white"
          }`}
        >
          {rank}#
        </h1>
        <Image
          src={images.webp.large_image_url}
          alt="anime"
          width={40}
          height={40}
          className="rounded-md"
        />

        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-center gap-0.5">
            {!title_english ? (
              <h1 className="text-sm font-bold">{title}</h1>
            ) : (
              <h1 className="text-sm font-bold">{title_english}</h1>
            )}
            <div className="flex flex-row gap-2">
              {genres.map((genre, index) => (
                <h1
                  key={index}
                  className="text-xs bg-blue-400 rounded-md px-2 py-1"
                >
                  {genre.name}
                </h1>
              ))}
            </div>
          </div>

          <div className="sm:flex flex-row justify-center items-center gap-2 bg-gray-400/30 rounded-xl p-2 w-[100px] hidden">
            <div
              className={`w-5 h-5 rounded-full ${
                score > 8
                  ? "bg-green-500"
                  : score <= 8 && score > 5
                  ? "bg-yellow-500"
                  : score <= 5 && score > 3
                  ? "bg-orange-500"
                  : !score
                  ? "bg-gray-500"
                  : "bg-red-500"
              } flex items-center justify-center`}
            >
              <span className="text-xs">
                {score > 8
                  ? "A"
                  : score <= 8 && score > 5
                  ? "B"
                  : score <= 5 && score > 3
                  ? "C"
                  : !score
                  ? null
                  : "D"}
              </span>
            </div>
            <span className="text-white font-bold text-sm">
              {score || "N/A"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
