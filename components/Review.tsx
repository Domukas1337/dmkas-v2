"use client";
import Link from "next/link";

import { useState } from "react";
import Image from "next/image";
import { AnimeReviews } from "@/app/types/Reviews";

const scoreClasses = [
  { score: 1, className: "text-red-500" },
  { score: 2, className: "text-yellow-500" },
  { score: 3, className: "text-yellow-400" },
  { score: 4, className: "text-yellow-300" },
  { score: 5, className: "text-yellow-200" },
  { score: 6, className: "text-yellow-100" },
  { score: 7, className: "text-green-100" },
  { score: 8, className: "text-green-200" },
  { score: 9, className: "text-green-300" },
  { score: 10, className: "text-green-400" },
];

export default function Review({ review }: { review: AnimeReviews }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="text-white px-4 py-2 mt-4 review-fadein">
      <Link
        href={review.user.url}
        className="flex flex-row items-center w-fit hover:bg-cyan-300/50 rounded-md px-2 py-2 transition-all"
      >
        <Image
          src={review.user.images.webp.image_url}
          alt={review.user.username}
          width={50}
          height={50}
          className="rounded-full h-12 w-12 object-cover border-2 border-gray-400"
        />
        <p className="pl-2">{review.user.username}</p>
      </Link>
      {showMore ? (
        <p className="text-white">{review.review}</p>
      ) : (
        <p className="text-white">{review.review.slice(0, 350)}...</p>
      )}
      {review.review.length > 350 && !showMore ? (
        <div className="flex flex-row justify-start">
          <p
            className="dark:text-white text-lg cursor-pointer hover:text-cyan-300 transition-colors duration-150"
            onClick={() => setShowMore(true)}
          >
            Show more
          </p>
        </div>
      ) : (
        <p
          className="dark:text-white text-lg cursor-pointer hover:text-cyan-300 transition-colors duration-150"
          onClick={() => setShowMore(false)}
        >
          Show less
        </p>
      )}
      <div className="flex flex-row justify-between items-center mt-1.5">
        <p
          className={`sm:text-lg md:text-2xl font-bold ${
            scoreClasses.find((scoreClass) => scoreClass.score === review.score)
              ?.className ?? "text-gray-500"
          }`}
        >
          Score: {review.score}
        </p>
        <p className="text-base dark:text-gray-300 ">
          {review.date.split("T")[0]}
        </p>
      </div>
    </div>
  );
}
