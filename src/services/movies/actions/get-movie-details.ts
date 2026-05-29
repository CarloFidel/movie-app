import type { Movie } from "../../../interfaces/movie.interface";
import { tmdbApi } from "../api/tmdb.api";

export const getMovieDetails = async (movieId: number): Promise<Movie> => {
  try {

    const response = await tmdbApi.get(`movie/${movieId}`);
    return response.data;
    
  } catch (error) {
    console.error(error);
    throw new Error("problem in the request");
  }
};
