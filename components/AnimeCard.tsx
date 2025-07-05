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
  mal_id,
}: Anime) {
  return (
    <Link
      href={`/anime/details?id=${mal_id}`}
      className="hover:scale-105 transition-all duration-200"
    >
      <div className="relative group">
        <div className="flex flex-col ">
          <Image
            src={images.jpg.image_url}
            alt="anime"
            width={200}
            height={200}
            className="rounded-md w-full object-cover"
          />
          <h1 className="text-md font-bold w-[200px] overflow-hidden text-ellipsis break-words">
            {title_english}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-700/50 backdrop-blur-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
          <div className="flex flex-col gap-2">
            <h1 className="text-sm">{type}</h1>
            <h1 className="text-sm">{status}</h1>
            <h1 className="text-sm">{episodes}</h1>
            {genres.map((genre) => genre.name).join(", ")}
          </div>
        </div>
      </div>
    </Link>
  );
}
