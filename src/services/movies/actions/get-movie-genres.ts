import { tmdbApi } from "../api/tmdb.api";

export interface Genre {
  id: number;
  name: string;
}

export const getMovieGenres = async (): Promise<Genre[]> => {
  try {
    const response = await tmdbApi.get("genre/movie/list");
    return response.data.genres;
  } catch (error) {
    console.error(error);
    return [];
  }
};
