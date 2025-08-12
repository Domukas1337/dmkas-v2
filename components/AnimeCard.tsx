import type { Anime } from "@/app/types/Anime";
import Image from "next/image";
import Link from "next/link";

export default function AnimeCard({
  images,
  type,
  episodes,
  genres,
  title,
  title_english,
  title_japanese,
  mal_id,
  status,
  score,
}: Anime) {
  return (
    <Link
      href={`/search/anime/details/${mal_id}`}
      className="hover:scale-105 transition-all duration-200"
    >
      <div className="relative group bg-gray-400/30 rounded-lg overflow-hidden w-[280px] h-full flex flex-col">
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={images.webp.large_image_url}
            alt="anime"
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute top-2 left-2 bg-black/50 rounded-full px-2 py-1">
            <p className="text-white text-sm">{status}</p>
          </div>
          <div className="absolute top-2 right-2 flex items-center gap-2 bg-black/50 rounded-full px-2 py-1">
            <div
              className={`w-5 h-5 rounded-full ${
                score >= 8
                  ? "bg-green-600"
                  : score < 8 && score > 5
                  ? "bg-yellow-500"
                  : score <= 5 && score > 3
                  ? "bg-orange-500"
                  : !score
                  ? "bg-gray-500"
                  : "bg-red-500"
              } flex items-center justify-center`}
            >
              <span className="text-xs font-bold">
                {score >= 8
                  ? "A"
                  : score < 8 && score > 5
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

          <div className="flex flex-wrap gap-2">
            {genres.slice(0, 3).map((genre, index) => (
              <span
                key={index}
                className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
