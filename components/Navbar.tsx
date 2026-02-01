import Link from "next/link";

import { FaBook, FaPlay } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import Button from "./Button";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 border-b bg-zinc-900/70 border-zinc-800">
      <div className="flex justify-between items-center p-2 mx-0 md:mx-24">
        <Button>
          <Link href="/" className="text-2xl barlow font-black">
            DMKAS
          </Link>
        </Button>
        <div className="flex gap-2 sm:gap-4">
          <Link href="/search/anime">
            <Button>
              <span className="flex gap-2 items-center">
                <FaPlay />
                Anime
              </span>
            </Button>
          </Link>

          <Link href="/search/manga">
            <Button>
              <span className="flex gap-2 items-center">
                <FaBook />
                Manga
              </span>
            </Button>
          </Link>

          <Button>
            <Link
              href="https://github.com/domukas1337"
              className="flex items-center gap-2"
            >
              <FaGithub />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
