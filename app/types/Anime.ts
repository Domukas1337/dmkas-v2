interface Anime {
  id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  type: string;
  episodes: number;
  status: string;
  genres: {
    name: string;
  }[];
}

export default Anime;
