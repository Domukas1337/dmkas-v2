import { Character } from "@/types/Character";

import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({
  character,
  role,
  favorites,
}: Character) {
  return (
    <Link
      href={character.url}
      className="hover:scale-105 transition-transform duration-200 rounded-lg focus:scale-105 focus:outline focus:outline-offset-2 focus:outline-zinc-600 mb-2"
    >
      <div className="relative group bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden sm:w-70 w-50 h-full flex flex-col">
        <div className="relative h-50 overflow-hidden">
          <Image
            src={character.images.webp.image_url}
            alt="character"
            fill
            className="w-auto h-auto object-cover"
          />
          <div className="absolute top-2 left-2 sm:bg-black/50 bg-none rounded-full px-2 py-1">
            <p className="text-white text-sm sm:flex hidden">{role}</p>
          </div>

          <div className="absolute top-2 right-2 flex items-center gap-2 bg-black/50 rounded-full px-2 py-1">
            <span className="text-white font-bold text-sm">⭐️{favorites}</span>
          </div>

          <div className="absolute bottom-0 bg-linear-to-t from-black w-full">
            <p className="text-white text-sm sm:text-xl pl-1 font-black">
              {character.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
