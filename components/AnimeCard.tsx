import type Anime from "@/app/types/Anime";
import Image from "next/image";
import Link from "next/link";

export default function AnimeCard({
  images,
  type,
  episodes,
  status,
  genres,
  title_english,
  title_japanese,
  mal_id,
}: Anime) {
  return (
    <Link
      href={`/anime/details?id=${mal_id}`}
      className="hover:scale-105 transition-all duration-200"
    >
      <div className="flex flex-row border border-gray-400 rounded-lg shadow-lg w-96 h-48 p-2 m-2 dark:text-white backdrop-blur-lg">
        <Image
          src={images.jpg.image_url}
          alt={mal_id.toString()}
          width={120}
          height={180}
          className="rounded-lg mr-2 object-cover"
        />
        <div className="flex flex-col">
          <div className="">
            {title_english.length > 20 ? (
              <h2 className="text-lg font-semibold">
                {title_english.slice(0, 22)}...
              </h2>
            ) : (
              <h2 className="text-lg font-semibold">{title_english}</h2>
            )}
          </div>
          {title_english === null && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {title_japanese}
            </p>
          )}
          <div className="flex flex-row gap-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">{type}</p>
            {episodes === null ? null : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {episodes} episodes
              </p>
            )}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <div
            className={`rounded-full w-fit my-2 px-2 
                  ${
                    status === "Finished Airing"
                      ? "bg-green-300 dark:bg-green-500"
                      : status === "Paused"
                      ? "bg-yellow-300 dark:bg-yellow-500"
                      : status === "Not yet aired"
                      ? "bg-red-300 dark:bg-red-500"
                      : "bg-blue-300 dark:bg-blue-500"
                  }`}
          >
            <p className="text-center text-sm">{status}</p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            MAL ID: {mal_id}
          </p>
        </div>
      </div>
    </Link>
  );
}
