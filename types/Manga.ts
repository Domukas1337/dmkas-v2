interface Manga {
  title: string;
  title_english: string;
  title_japanese: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
  type: string;
  status: string;
  chapters: number;
  volumes: number;
  score: number;
  scored_by: number;
  rank: number;
  synopsis: string;
  authors: [
    {
      name: string;
    }
  ];
  genres: [
    {
      name: string;
    }
  ];
  mal_id: number;
}
export type { Manga };
