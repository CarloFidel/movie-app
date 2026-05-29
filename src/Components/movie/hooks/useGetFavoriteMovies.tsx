import { useEffect, useState } from "react";
import type { Movie } from "../../../interfaces/movie.interface";
import { getMovieDetails } from "../../../services/movies/actions/get-movie-details";

export const useGetFavoriteMovies = (moviesIds: number[]) => {
  const [favoriteMovies, setfavoriteMovies] = useState<Movie[]>([]);
  const [error, seError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const getMovies = async () => {
      const movies: Movie[] = [];
      try {
        for (const id of moviesIds) {
          const movie = await getMovieDetails(id);
          movies.push(movie);
        }
        if (isMounted) setfavoriteMovies(movies);
        setLoading(false);
      } catch (error) {
        if (isMounted) seError(`${error}`);
      }
    };

    if (moviesIds.length > 0) {
      getMovies();
    }

    return () => {
      isMounted = false;
    };
  }, [moviesIds]);
  return { favoriteMovies, error, loading };
};
