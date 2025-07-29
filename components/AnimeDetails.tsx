import type { Anime } from "@/app/types/Anime";
import Image from "next/image";
import Link from "next/link";

export default function AnimeDetails({
  images,
  type,
  episodes,
  genres,
  title,
  title_english,
  title_japanese,
  mal_id,
  synopsis,
  trailer,
  status,
  score,
}: Anime) {
  return (
    <div className="rounded-lg overflow-hidden flex flex-col md:flex-row">
      <Image
        src={images.webp.large_image_url}
        alt={title}
        width={403}
        height={400}
        className="rounded-lg m-2 border-2 object-cover border-gray-400"
      />

      <div className="p-4 space-y-3">
        <div>
          <h2 className="text-white font-bold text-lg">
            {title_english || title}
          </h2>
          <h3 className="text-gray-300 text-sm">{title_japanese}</h3>
          <p className="text-gray-300 text-sm">
            {type} • {!episodes ? "Unknown" : episodes}{" "}
            {!episodes ? null : "Episodes"}
          </p>
        </div>
        <div className="flex gap-2">
          <div className="bg-black/50 rounded-full px-2 py-1">
            <p className="text-white text-sm">{status}</p>
          </div>
          <div className="flex items-center gap-2 bg-black/50 rounded-full px-2 py-1">
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

        <div className="flex flex-wrap gap-2">
          {genres.slice(0, 3).map((genre, index) => (
            <span
              key={index}
              className="bg-blue-400 text-white text-xs font-medium px-3 py-1 rounded-full"
            >
              {genre.name}
            </span>
          ))}
        </div>

        <p className="text-gray-300 text-sm">{synopsis}</p>
        <div className="flex flex-row gap-2">
          <Link
            href={trailer?.url || ""}
            target="_blank"
            className={` text-white text-xs font-medium px-3 py-1 rounded-full ${
              !trailer?.url
                ? "cursor-not-allowed bg-gray-500"
                : "bg-blue-400 hover:bg-blue-500 transition-colors duration-200"
            }`}
          >
            Watch trailer
          </Link>
          <Link
            href={`https://myanimelist.net/anime/${mal_id}`}
            target="_blank"
            className=" text-white text-xs font-medium px-3 py-1 rounded-full bg-blue-400 hover:bg-blue-500 transition-colors duration-200"
          >
            MAL
          </Link>
        </div>
      </div>
    </div>
  );
}
