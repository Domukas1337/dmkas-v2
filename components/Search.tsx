"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 70 }, (_, index) =>
    String(currentYear - index)
  );

  const initialQuery = searchParams.get("q") || "";
  const initialGenre = searchParams.get("genre") || "";
  const initialYear = searchParams.get("year") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [selectedYear, setSelectedYear] = useState(initialYear);

  const handleSearch = () => {
    const params = new URLSearchParams();

    params.set("q", searchQuery);
    params.set("genre", selectedGenre);
    params.set("year", selectedYear);

    router.push(`/search/anime?${params.toString()}`);
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelectedGenre(e.target.value);
    setTimeout(() => {
      handleSearch();
    }, 10);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelectedYear(e.target.value);
    setTimeout(() => {
      handleSearch();
    }, 10);
  };

  const handleClear = () => {
    setSearchQuery("");
    setSelectedGenre("Any");
    setSelectedYear("Any");
    router.push("/search/anime");
    window.location.reload();
  };

  return (
    <div className="flex flex-row gap-10">
      <div className="flex flex-col">
        <h1 className="font-black mb-2">Search</h1>
        <input
          className="bg-gray-700 rounded-2xl p-2"
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
          className="bg-gray-700 rounded-2xl p-2.5 pr-10"
          onChange={(e) => handleGenreChange(e)}
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
          className="bg-gray-700 rounded-2xl p-2.5 pr-10"
          onChange={(e) => handleYearChange(e)}
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
      <button className="bg-gray-700 rounded-2xl p-2" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}
