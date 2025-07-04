interface Anime {
  id: number;
  title_english: string;
  title_japanese: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  type: string;
  episodes: number;
  status: string;
  genres: [
    {
      name: string;
    }
  ];
  mal_id: number;
}

export default Anime;
