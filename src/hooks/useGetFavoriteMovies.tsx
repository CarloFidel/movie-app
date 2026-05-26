import { useEffect, useState } from "react";
import type { Movie } from "../interfaces/movie.interface";
import { getMovieDetails } from "../services/movies/actions/get-movie-details";


export const useGetFavoriteMovies = (moviesIds: number[]) => {
  const [favoriteMovies, setfavoriteMovies] = useState<Movie[]>();

  useEffect(() => {
    const getMovies = async () => {
      const movies: Movie[] = [];
      for (const id of moviesIds) {
        const movie = await getMovieDetails(id);
        movies.push(movie);
      }
      setfavoriteMovies(movies);
    };

    if (moviesIds.length > 0) {
      getMovies();
    }
  }, [moviesIds]);

  return favoriteMovies;
};
