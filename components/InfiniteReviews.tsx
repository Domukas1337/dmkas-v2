"use client";

import { useState, useEffect, useCallback } from "react";
import { getAnimeReviews, getMangaReviews } from "@/app/api/dataReviews";
import { Reviews } from "@/app/types/Reviews";
import Review from "@/components/Review";

interface InfiniteReviewsProps {
  id: number;
  initialReviews: Reviews[];
}

function InfiniteReviewsAnime({ id, initialReviews }: InfiniteReviewsProps) {
  const [reviews, setReviews] = useState<Reviews[]>(initialReviews);
  const [page, setPage] = useState(2); // Start from page 2 since we have initial data
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreReviews = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      // Modify your getReviews function to accept page parameter
      const newReviews = await getAnimeReviews(id, page);

      if (newReviews.data && newReviews.data.length > 0) {
        setReviews((prev) => [...prev, ...newReviews.data]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading more reviews:", error);
    } finally {
      setLoading(false);
    }
  }, [id, page, loading, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000 // Load when 1000px from bottom
      ) {
        loadMoreReviews();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreReviews]);

  if (reviews.length === 0) {
    return (
      <div className="review-fadein">
        <h3 className="text-lg font-bold text-center">No reviews</h3>
        <p className="text-sm text-center">
          Reviews might appear after some time when the anime is fully released
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {reviews.map((review: Reviews, index: number) => (
        <Review key={index} review={review} />
      ))}

      {loading && (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}

      {!hasMore && reviews.length > 0 && (
        <p className="text-center text-gray-400 py-4">
          No more reviews to load
        </p>
      )}
    </div>
  );
}

function InfiniteReviewsManga({ id, initialReviews }: InfiniteReviewsProps) {
  const [reviews, setReviews] = useState<Reviews[]>(initialReviews);
  const [page, setPage] = useState(2); // Start from page 2 since we have initial data
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreReviews = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      // Modify your getReviews function to accept page parameter
      const newReviews = await getMangaReviews(id, page);

      if (newReviews.data && newReviews.data.length > 0) {
        setReviews((prev) => [...prev, ...newReviews.data]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading more reviews:", error);
    } finally {
      setLoading(false);
    }
  }, [id, page, loading, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000 // Load when 1000px from bottom
      ) {
        loadMoreReviews();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreReviews]);

  if (reviews.length === 0) {
    return (
      <div className="review-fadein">
        <h3 className="text-lg font-bold text-center">No reviews</h3>
        <p className="text-sm text-center">
          Reviews might appear after some time (maybe)
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {reviews.map((review: Reviews, index: number) => (
        <Review key={index} review={review} />
      ))}

      {loading && (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}

      {!hasMore && reviews.length > 0 && (
        <p className="text-center text-gray-400 py-4">
          No more reviews to load
        </p>
      )}
    </div>
  );
}

export { InfiniteReviewsAnime, InfiniteReviewsManga };
