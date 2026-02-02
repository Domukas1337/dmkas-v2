import { FaBook, FaPlay } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import Button from "./Button";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 border-b bg-zinc-900/70 border-zinc-800">
      <div className="flex justify-between items-center p-2 mx-0 md:mx-24">
        <Button isLink={true} href="/">
          <span className="text-2xl barlow font-black">DMKAS</span>
        </Button>
        <div className="flex gap-2 sm:gap-4">
          <Button isLink={true} href="/search/anime">
            <span className="flex gap-2 items-center">
              <FaPlay />
              Anime
            </span>
          </Button>

          <Button isLink={true} href="/search/manga">
            <span className="flex gap-2 items-center">
              <FaBook />
              Manga
            </span>
          </Button>

          <Button
            isLink={true}
            href="https://github.com/domukas1337/dmkas-v2"
            target="_blank"
          >
            <FaGithub />
          </Button>
        </div>
      </div>
    </div>
  );
}
