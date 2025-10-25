interface Anime {
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
  rank: number;
  synopsis: string;
  trailer: {
    url: string;
  };
  genres: [
    {
      name: string;
    }
  ];
  mal_id: number;
}
export type { Anime };
