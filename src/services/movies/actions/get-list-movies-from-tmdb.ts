import type { Movie } from "../../../interfaces/movie";
import { tmdbApi } from "../api/tmdb.api";

export const getListPopularMovies = async (): Promise<Movie[]> => {
  try {
    
    const response = await tmdbApi.get("/popular", {
      params: {
        page: 5
      }
    });
    //console.log(response.data.results);
    return response.data.results;

  } catch (error) {
    console.error(error);
    return [];
  }
};
