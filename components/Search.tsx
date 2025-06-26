"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { CiSearch } from "react-icons/ci";

const genres = {
  data: [
    {
      mal_id: 1,
      name: "Action",
      url: "https://myanimelist.net/anime/genre/1/Action",
      count: 5557,
    },
    {
      mal_id: 2,
      name: "Adventure",
      url: "https://myanimelist.net/anime/genre/2/Adventure",
      count: 4372,
    },
    {
      mal_id: 5,
      name: "Avant Garde",
      url: "https://myanimelist.net/anime/genre/5/Avant_Garde",
      count: 1045,
    },
    {
      mal_id: 46,
      name: "Award Winning",
      url: "https://myanimelist.net/anime/genre/46/Award_Winning",
      count: 258,
    },
    {
      mal_id: 28,
      name: "Boys Love",
      url: "https://myanimelist.net/anime/genre/28/Boys_Love",
      count: 191,
    },
    {
      mal_id: 4,
      name: "Comedy",
      url: "https://myanimelist.net/anime/genre/4/Comedy",
      count: 7699,
    },
    {
      mal_id: 8,
      name: "Drama",
      url: "https://myanimelist.net/anime/genre/8/Drama",
      count: 3062,
    },
    {
      mal_id: 10,
      name: "Fantasy",
      url: "https://myanimelist.net/anime/genre/10/Fantasy",
      count: 5938,
    },
    {
      mal_id: 26,
      name: "Girls Love",
      url: "https://myanimelist.net/anime/genre/26/Girls_Love",
      count: 121,
    },
    {
      mal_id: 47,
      name: "Gourmet",
      url: "https://myanimelist.net/anime/genre/47/Gourmet",
      count: 220,
    },
    {
      mal_id: 14,
      name: "Horror",
      url: "https://myanimelist.net/anime/genre/14/Horror",
      count: 578,
    },
    {
      mal_id: 7,
      name: "Mystery",
      url: "https://myanimelist.net/anime/genre/7/Mystery",
      count: 984,
    },
    {
      mal_id: 22,
      name: "Romance",
      url: "https://myanimelist.net/anime/genre/22/Romance",
      count: 2168,
    },
    {
      mal_id: 24,
      name: "Sci-Fi",
      url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      count: 3429,
    },
    {
      mal_id: 36,
      name: "Slice of Life",
      url: "https://myanimelist.net/anime/genre/36/Slice_of_Life",
      count: 1554,
    },
    {
      mal_id: 30,
      name: "Sports",
      url: "https://myanimelist.net/anime/genre/30/Sports",
      count: 808,
    },
    {
      mal_id: 37,
      name: "Supernatural",
      url: "https://myanimelist.net/anime/genre/37/Supernatural",
      count: 1538,
    },
    {
      mal_id: 41,
      name: "Suspense",
      url: "https://myanimelist.net/anime/genre/41/Suspense",
      count: 452,
    },
    {
      mal_id: 9,
      name: "Ecchi",
      url: "https://myanimelist.net/anime/genre/9/Ecchi",
      count: 818,
    },
    {
      mal_id: 49,
      name: "Erotica",
      url: "https://myanimelist.net/anime/genre/49/Erotica",
      count: 79,
    },
    {
      mal_id: 12,
      name: "Hentai",
      url: "https://myanimelist.net/anime/genre/12/Hentai",
      count: 1576,
    },
    {
      mal_id: 50,
      name: "Adult Cast",
      url: "https://myanimelist.net/anime/genre/50/Adult_Cast",
      count: 699,
    },
    {
      mal_id: 51,
      name: "Anthropomorphic",
      url: "https://myanimelist.net/anime/genre/51/Anthropomorphic",
      count: 1193,
    },
    {
      mal_id: 52,
      name: "CGDCT",
      url: "https://myanimelist.net/anime/genre/52/CGDCT",
      count: 259,
    },
    {
      mal_id: 53,
      name: "Childcare",
      url: "https://myanimelist.net/anime/genre/53/Childcare",
      count: 76,
    },
    {
      mal_id: 54,
      name: "Combat Sports",
      url: "https://myanimelist.net/anime/genre/54/Combat_Sports",
      count: 95,
    },
    {
      mal_id: 81,
      name: "Crossdressing",
      url: "https://myanimelist.net/anime/genre/81/Crossdressing",
      count: 61,
    },
    {
      mal_id: 55,
      name: "Delinquents",
      url: "https://myanimelist.net/anime/genre/55/Delinquents",
      count: 76,
    },
    {
      mal_id: 39,
      name: "Detective",
      url: "https://myanimelist.net/anime/genre/39/Detective",
      count: 313,
    },
    {
      mal_id: 56,
      name: "Educational",
      url: "https://myanimelist.net/anime/genre/56/Educational",
      count: 321,
    },
    {
      mal_id: 57,
      name: "Gag Humor",
      url: "https://myanimelist.net/anime/genre/57/Gag_Humor",
      count: 276,
    },
    {
      mal_id: 58,
      name: "Gore",
      url: "https://myanimelist.net/anime/genre/58/Gore",
      count: 268,
    },
    {
      mal_id: 35,
      name: "Harem",
      url: "https://myanimelist.net/anime/genre/35/Harem",
      count: 480,
    },
    {
      mal_id: 59,
      name: "High Stakes Game",
      url: "https://myanimelist.net/anime/genre/59/High_Stakes_Game",
      count: 55,
    },
    {
      mal_id: 13,
      name: "Historical",
      url: "https://myanimelist.net/anime/genre/13/Historical",
      count: 1699,
    },
    {
      mal_id: 60,
      name: "Idols (Female)",
      url: "https://myanimelist.net/anime/genre/60/Idols_Female",
      count: 358,
    },
    {
      mal_id: 61,
      name: "Idols (Male)",
      url: "https://myanimelist.net/anime/genre/61/Idols_Male",
      count: 182,
    },
    {
      mal_id: 62,
      name: "Isekai",
      url: "https://myanimelist.net/anime/genre/62/Isekai",
      count: 438,
    },
    {
      mal_id: 63,
      name: "Iyashikei",
      url: "https://myanimelist.net/anime/genre/63/Iyashikei",
      count: 184,
    },
    {
      mal_id: 64,
      name: "Love Polygon",
      url: "https://myanimelist.net/anime/genre/64/Love_Polygon",
      count: 112,
    },
    {
      mal_id: 65,
      name: "Magical Sex Shift",
      url: "https://myanimelist.net/anime/genre/65/Magical_Sex_Shift",
      count: 32,
    },
    {
      mal_id: 66,
      name: "Mahou Shoujo",
      url: "https://myanimelist.net/anime/genre/66/Mahou_Shoujo",
      count: 351,
    },
    {
      mal_id: 17,
      name: "Martial Arts",
      url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
      count: 701,
    },
    {
      mal_id: 18,
      name: "Mecha",
      url: "https://myanimelist.net/anime/genre/18/Mecha",
      count: 1308,
    },
    {
      mal_id: 67,
      name: "Medical",
      url: "https://myanimelist.net/anime/genre/67/Medical",
      count: 54,
    },
    {
      mal_id: 38,
      name: "Military",
      url: "https://myanimelist.net/anime/genre/38/Military",
      count: 735,
    },
    {
      mal_id: 19,
      name: "Music",
      url: "https://myanimelist.net/anime/genre/19/Music",
      count: 5013,
    },
    {
      mal_id: 6,
      name: "Mythology",
      url: "https://myanimelist.net/anime/genre/6/Mythology",
      count: 643,
    },
    {
      mal_id: 68,
      name: "Organized Crime",
      url: "https://myanimelist.net/anime/genre/68/Organized_Crime",
      count: 106,
    },
    {
      mal_id: 69,
      name: "Otaku Culture",
      url: "https://myanimelist.net/anime/genre/69/Otaku_Culture",
      count: 108,
    },
    {
      mal_id: 20,
      name: "Parody",
      url: "https://myanimelist.net/anime/genre/20/Parody",
      count: 800,
    },
    {
      mal_id: 70,
      name: "Performing Arts",
      url: "https://myanimelist.net/anime/genre/70/Performing_Arts",
      count: 103,
    },
    {
      mal_id: 71,
      name: "Pets",
      url: "https://myanimelist.net/anime/genre/71/Pets",
      count: 134,
    },
    {
      mal_id: 40,
      name: "Psychological",
      url: "https://myanimelist.net/anime/genre/40/Psychological",
      count: 449,
    },
    {
      mal_id: 3,
      name: "Racing",
      url: "https://myanimelist.net/anime/genre/3/Racing",
      count: 266,
    },
    {
      mal_id: 72,
      name: "Reincarnation",
      url: "https://myanimelist.net/anime/genre/72/Reincarnation",
      count: 152,
    },
    {
      mal_id: 73,
      name: "Reverse Harem",
      url: "https://myanimelist.net/anime/genre/73/Reverse_Harem",
      count: 78,
    },
    {
      mal_id: 74,
      name: "Love Status Quo",
      url: "https://myanimelist.net/anime/genre/74/Love_Status_Quo",
      count: 45,
    },
    {
      mal_id: 21,
      name: "Samurai",
      url: "https://myanimelist.net/anime/genre/21/Samurai",
      count: 249,
    },
    {
      mal_id: 23,
      name: "School",
      url: "https://myanimelist.net/anime/genre/23/School",
      count: 2215,
    },
    {
      mal_id: 75,
      name: "Showbiz",
      url: "https://myanimelist.net/anime/genre/75/Showbiz",
      count: 50,
    },
    {
      mal_id: 29,
      name: "Space",
      url: "https://myanimelist.net/anime/genre/29/Space",
      count: 666,
    },
    {
      mal_id: 11,
      name: "Strategy Game",
      url: "https://myanimelist.net/anime/genre/11/Strategy_Game",
      count: 335,
    },
    {
      mal_id: 31,
      name: "Super Power",
      url: "https://myanimelist.net/anime/genre/31/Super_Power",
      count: 714,
    },
    {
      mal_id: 76,
      name: "Survival",
      url: "https://myanimelist.net/anime/genre/76/Survival",
      count: 75,
    },
    {
      mal_id: 77,
      name: "Team Sports",
      url: "https://myanimelist.net/anime/genre/77/Team_Sports",
      count: 323,
    },
    {
      mal_id: 78,
      name: "Time Travel",
      url: "https://myanimelist.net/anime/genre/78/Time_Travel",
      count: 152,
    },
    {
      mal_id: 32,
      name: "Vampire",
      url: "https://myanimelist.net/anime/genre/32/Vampire",
      count: 176,
    },
    {
      mal_id: 79,
      name: "Video Game",
      url: "https://myanimelist.net/anime/genre/79/Video_Game",
      count: 168,
    },
    {
      mal_id: 80,
      name: "Visual Arts",
      url: "https://myanimelist.net/anime/genre/80/Visual_Arts",
      count: 93,
    },
    {
      mal_id: 48,
      name: "Workplace",
      url: "https://myanimelist.net/anime/genre/48/Workplace",
      count: 227,
    },
    {
      mal_id: 82,
      name: "Urban Fantasy",
      url: "https://myanimelist.net/anime/genre/82/Urban_Fantasy",
      count: 206,
    },
    {
      mal_id: 83,
      name: "Villainess",
      url: "https://myanimelist.net/anime/genre/83/Villainess",
      count: 23,
    },
    {
      mal_id: 43,
      name: "Josei",
      url: "https://myanimelist.net/anime/genre/43/Josei",
      count: 158,
    },
    {
      mal_id: 15,
      name: "Kids",
      url: "https://myanimelist.net/anime/genre/15/Kids",
      count: 6864,
    },
    {
      mal_id: 42,
      name: "Seinen",
      url: "https://myanimelist.net/anime/genre/42/Seinen",
      count: 1085,
    },
    {
      mal_id: 25,
      name: "Shoujo",
      url: "https://myanimelist.net/anime/genre/25/Shoujo",
      count: 515,
    },
    {
      mal_id: 27,
      name: "Shounen",
      url: "https://myanimelist.net/anime/genre/27/Shounen",
      count: 2113,
    },
  ],
};

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
  const initialStatus = searchParams.get("status") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);

  function handleSearch() {
    const params = new URLSearchParams();

    params.set("q", searchQuery);
    params.set("genre", selectedGenre);
    params.set("year", selectedYear);
    params.set("status", selectedStatus);

    router.push(`/search/anime?${params.toString()}`);
  }

  function handleClear() {
    setSearchQuery("");
    setSelectedGenre("");
    setSelectedYear("");
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
          {genres.data.map((genre) => (
            <option key={genre.mal_id} value={genre.mal_id}>
              {genre.name}
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
        <h1 className="font-black mb-2">Status</h1>
        <select
          className="bg-gray-700 rounded-lg p-2.5 pr-10"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">Any</option>
          <option value="Airing">Airing</option>
          <option value="Complete">Complete</option>
          <option value="Upcoming">Upcoming</option>
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
          {genres.data.map((genre) => (
            <option key={genre.mal_id} value={genre.mal_id}>
              {genre.name}
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
