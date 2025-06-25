"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { CiSearch } from "react-icons/ci";

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mecha",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
];

export default function SearchAnime() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 70 }, (_, index) =>
    String(currentYear - index)
  );

  const initialQuery = searchParams.get("q") || "";
  const initialGenre = searchParams.get("genre") || "";
  const initialYear = searchParams.get("year") || "";
  const initalSeason = searchParams.get("season") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [selectedSeason, setSelectedSeason] = useState(initalSeason);

  function handleSearch() {
    const params = new URLSearchParams();

    params.set("q", searchQuery);
    params.set("genre", selectedGenre);
    params.set("year", selectedYear);
    params.set("season", selectedSeason);

    router.push(`/search/anime?${params.toString()}`);
  }

  function handleClear() {
    setSearchQuery("");
    setSelectedGenre("");
    setSelectedYear("");
    setSelectedSeason("");
    router.push("/search/anime");
    window.location.reload();
  }

  return (
    <div className="flex flex-row gap-10">
      <div className="flex flex-col">
        <h1 className="font-black mb-2">Search</h1>
        <input
          className="bg-gray-700 rounded-lg p-2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-black mb-2">Genre</h1>
        <select
          className="bg-gray-700 rounded-lg p-2.5 pr-10"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Any</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <h1 className="font-black mb-2">Year</h1>
        <select
          className="bg-gray-700 rounded-lg p-2.5 pr-10"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Any</option>
          <option value={currentYear + 1}>{currentYear + 1}</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h1 className="font-black mb-2">Season</h1>
        <select
          className="bg-gray-700 rounded-lg p-2.5 pr-10"
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value)}
        >
          <option value="">Any</option>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
        </select>
      </div>
      <div className="flex gap-2">
        <button
          className="flex flex-row items-center bg-blue-600 rounded-2xl p-2 px-4 self-end hover:py-3 transition-all duration-150 hover:cursor-pointer"
          onClick={handleSearch}
        >
          <CiSearch size={20} />
          Search
        </button>
        <button
          className="bg-gray-700 rounded-2xl p-2 self-end px-4 hover:py-3 transition-all duration-150 hover:bg-white hover:text-black hover:cursor-pointer"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export function SearchManga() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get("q") || "";
  const initialGenre = searchParams.get("genre") || "";
  const initialFormat = searchParams.get("format") || "";
  const initialStatus = searchParams.get("status") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [selectedFormat, setSelectedFormat] = useState(initialFormat);
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);

  function handleSearch() {
    const params = new URLSearchParams();

    params.set("q", searchQuery);
    params.set("genre", selectedGenre);
    params.set("format", selectedFormat);
    params.set("status", selectedStatus);

    router.push(`/search/manga?${params.toString()}`);
  }

  function handleClear() {
    setSearchQuery("");
    setSelectedGenre("");
    setSelectedFormat("");
    setSelectedStatus("");
    router.push("/search/anime");
    window.location.reload();
  }

  return (
    <div className="flex flex-row gap-10">
      <div className="flex flex-col">
        <h1 className="font-black mb-2">Search</h1>
        <input
          className="bg-gray-700 rounded-lg p-2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-black mb-2">Genre</h1>
        <select
          className="bg-gray-700 rounded-lg p-2.5 pr-10"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Any</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <h1 className="font-black mb-2">Format</h1>
        <select
          className="bg-gray-700 rounded-lg p-2.5 pr-10"
          value={selectedFormat}
          onChange={(e) => setSelectedFormat(e.target.value)}
        >
          <option value="">Any</option>
          <option value="lightnovel">Light Novel</option>
          <option value="manga">Manga</option>
          <option value="oneshot">One-shot</option>
        </select>
      </div>
      <div>
        <h1 className="font-black mb-2">Status</h1>
        <select
          className="bg-gray-700 rounded-lg p-2.5 pr-10"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">Any</option>
          <option value="Releasing">Releasing</option>
          <option value="Finished">Finished</option>
          <option value="NotYetReleased">Not Yet Released</option>
          <option value="Hiatus">Hiatus</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div className="flex gap-2">
        <button
          className="flex flex-row items-center bg-red-600 rounded-2xl p-2 px-4 self-end hover:py-3 transition-all duration-150 hover:cursor-pointer"
          onClick={handleSearch}
        >
          <CiSearch size={20} />
          Search
        </button>
        <button
          className="bg-gray-700 rounded-2xl p-2 self-end px-4 hover:py-3 transition-all duration-150 hover:bg-white hover:text-black hover:cursor-pointer"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
