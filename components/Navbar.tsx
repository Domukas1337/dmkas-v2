import Link from "next/link";

import { FaPlay } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-700/50 backdrop-blur-lg z-50">
      <div className="flex justify-between items-center p-4 mx-0 md:mx-24">
        <Link
          href="/"
          className="text-2xl hover:text-blue-400 transition-colors duration-150 barlow font-black"
        >
          DMKAS
        </Link>
        <div className="flex gap-8">
          <div className="relative group">
            <Link
              href="/search/anime"
              className="cursor-pointer hover:text-blue-400 transition-colors duration-150"
            >
              Search
            </Link>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-700/50 backdrop-blur-lg text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 whitespace-nowrap">
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
            className="hover:cursor-pointer hover:text-blue-400 transition-colors duration-300"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}
