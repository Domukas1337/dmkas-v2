import Link from "next/link";

import { FaPlay } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-gray-700/50">
      <div className="flex justify-between items-center p-4 mx-24">
        <Link
          href="/"
          className="text-2xl hover:text-blue-400 transition-colors duration-300"
        >
          DMKAS
        </Link>
        <div className="flex gap-8">
          <div className="relative group">
            <span className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
              Search
            </span>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 whitespace-nowrap">
              <Link
                href="about:blank"
                className="flex items-center gap-3.5 hover:cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 mx-2"
              >
                <FaPlay />
                <span className="text-base font-black">Anime</span>
              </Link>
              <Link
                href="about:blank"
                className="flex items-center gap-3.5 hover:cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 mt-5 mx-2"
              >
                <FaBook />
                <span className="text-base font-black">Manga</span>
              </Link>
            </div>
          </div>
          <Link
            href="about:blank"
            className="hover:cursor-pointer hover:text-blue-400 transition-colors duration-300"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}
