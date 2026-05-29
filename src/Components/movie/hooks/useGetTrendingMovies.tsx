import { use, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import type { Movie } from "../../../interfaces/movie.interface";
import { getListPopularMovies } from "../../../services/movies/actions/get-list-movies-from-tmdb";

export const useGetTrendingMovies = (pages?: number) => {
  const authContext = use(AuthContext);
  const { login, isAuth } = authContext!;

  const [moviesPopular, setMoviesPopular] = useState<Movie[]>();

  useEffect(() => {
    const getmovies = async () => {
      const movies: Movie[] = await getListPopularMovies(pages);
      setMoviesPopular(movies);
    };

    getmovies();
  }, [pages]);

  return {
    login,
    isAuth,
    moviesPopular,
  };
};
