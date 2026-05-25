import type { CastElement } from "../../../interfaces/cast.interface";
import { tmdbApi } from "../api/tmdb.api";

export const getCast = async (movieId: number): Promise<CastElement[]> => {
  try {
    const response = await tmdbApi.get(`movie/${movieId}/credits`);

    return response.data.cast;
    
  } catch (error) {
    console.error(error);
    throw new Error("problem in the request");
  }
};
