import type Anime from "@/app/types/Anime";
import Image from "next/image";

export default function AnimeCard({
  title,
  images,
  type,
  episodes,
  status,
  genres,
}: Anime) {
  return (
    <div className="relative group">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-700/50 backdrop-blur-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
        <div>{genres.map((genre) => genre.name).join(", ")}</div>
        <div>
          <span className="font-bold">Type: </span>
          {type}
        </div>
        <div>
          <span className="font-bold">Episodes: </span>
          {episodes}
        </div>
        <div>
          <span className="font-bold">Status: </span>
          {status}
        </div>
      </div>
      <Image
        src={images.jpg.image_url}
        alt={title}
        width={200}
        height={300}
        className="object-cover"
      />
      <h1 className="text-lg font-bold">{title}</h1>
    </div>
  );
}
