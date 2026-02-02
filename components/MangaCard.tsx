import { Manga } from "@/types/Manga";
import Image from "next/image";
import Link from "next/link";

export default function MangaCard({
  images,
  //   type,
  genres,
  title,
  title_english,
  title_japanese,
  mal_id,
  status,
  score,
}: Manga) {
  return (
    <Link
      href={`/search/manga/details/${mal_id}`}
      className="hover:scale-105 transition-transform duration-200 rounded-lg focus:scale-105 focus:outline focus:outline-offset-2 focus:outline-zinc-600"
    >
      <div className="relative group bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden w-[280px] h-full flex flex-col">
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={images.webp.large_image_url}
            alt="anime"
            fill
            className="object-cover"
          />
          <div className="absolute top-2 left-2 bg-black/50 rounded-full px-2 py-1">
            <p className="text-white text-sm">{status}</p>
          </div>
          <div className="absolute top-2 right-2 flex items-center gap-2 bg-black/50 rounded-full px-2 py-1">
            <div
              className={`w-5 h-5 rounded-full ${
                score > 8
                  ? "bg-green-600"
                  : score <= 8 && score > 5
                    ? "bg-yellow-500"
                    : score <= 5 && score > 3
                      ? "bg-orange-500"
                      : !score
                        ? "bg-gray-500"
                        : "bg-red-500"
              } flex items-center justify-center`}
            >
              <span className="text-xs font-bold">
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

        <div className="p-4 space-y-3">
          <div>
            <h2 className="text-white font-bold text-lg">
              {title_english || title}
            </h2>
            <h3 className="text-gray-300 text-sm">{title_japanese}</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {genres.slice(0, 3).map((genre, index) => (
              <span
                key={index}
                className="text-white bg-zinc-800 border border-zinc-700 text-xs font-medium px-3 py-1 rounded-md"
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
