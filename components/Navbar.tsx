import Link from "next/link";

import { FaBook, FaPlay } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50">
      <div className="flex justify-between items-center p-4 mx-0 md:mx-24">
        <Link
          href="/"
          className="text-2xl hover:text-accent transition-colors duration-150 barlow font-black"
        >
          DMKAS
        </Link>
        <div className="flex gap-8">
          <div className="relative group">
            <Link
              href="/search/anime"
              className="cursor-pointer hover:text-accent font-semibold transition-colors duration-150"
            >
              Search
            </Link>
            <div className="absolute top-full translate-x-[-28%] px-3 py-2 text-white text-sm rounded-md bg-background/90 scale-0 group-hover:scale-100 transition-all duration-150 whitespace-nowrap">
              <div className="flex flex-col">
                <Link
                  href="/search/anime"
                  className="flex items-center gap-3.5 hover:cursor-pointer text-gray-400 hover:text-white transition-colors duration-150 mx-2"
                >
                  <FaPlay />
                  <span className="text-base font-black">Anime</span>
                </Link>
              </div>

              <div className="flex flex-col">
                <Link
                  href="/search/manga"
                  className="flex items-center gap-3.5 hover:cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 mt-5 mx-2"
                >
                  <FaBook />
                  <span className="text-base font-black">Manga</span>
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="https://github.com/domukas1337"
            className="hover:cursor-pointer font-semibold hover:text-accent transition-colors duration-300"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}
