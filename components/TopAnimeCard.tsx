import type { TopAnime } from "@/app/types/Anime";
import Image from "next/image";
import Link from "next/link";

export default function TopAnimeCard({
  images,
  title_english,
  title_japanese,
  mal_id,
  genres,
  rank,
}: TopAnime) {
  return (
    <Link
      href={`/anime/details?id=${mal_id}`}
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
              : "text-gray-300"
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
        <div className="flex flex-col justify-center gap-0.5">
          {!title_english ? (
            <h1 className="text-sm">{title_japanese}</h1>
          ) : (
            <h1 className="text-sm">{title_english}</h1>
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
      </div>
    </Link>
  );
}
