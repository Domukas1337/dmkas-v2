interface AnimeReviews {
  date: string;
  review: string;
  score: number;
  user: {
    url: string;
    username: string;
    images: {
      webp: {
        image_url: string;
      };
    };
  };
}

export type { AnimeReviews };
