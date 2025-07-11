interface Anime {
  id: number;
  title: string;
  title_english: string;
  title_japanese: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
  type: string;
  episodes: number;
  status: string;
  score: number;
  genres: [
    {
      name: string;
    }
  ];
  mal_id: number;
}

interface TopAnime extends Anime {
  rank: number;
  year: number;
}

export type { Anime, TopAnime };
