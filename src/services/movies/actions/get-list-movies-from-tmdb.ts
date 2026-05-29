import type { Movie } from "../../../interfaces/movie.interface";
import { tmdbApi } from "../api/tmdb.api";

export const getListPopularMovies = async (page = 1): Promise<Movie[]> => {
  try {
    const response = await tmdbApi.get("movie/popular", {
      params: {
        page: page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const getMoviesByName = async (query: string): Promise<Movie[]> => {
  try {
    const response = await tmdbApi.get("search/movie", {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
