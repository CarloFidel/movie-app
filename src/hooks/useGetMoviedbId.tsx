import { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/user/AuthContext";
import { getUserFromJwData } from "../utility/get-user-from-token";
import { getListFavoriteMovies } from "../services/users/actions/user-api-movieMate";
import type { MovieBackend } from "../interfaces/movieFromBackend";

export const useGetMoviedbId = () => {
  const [moviesIds, setMoviesIds] = useState<number[]>([]);

  const context = use(AuthContext);
  const { token } = context!;

  const { id } = getUserFromJwData(token!);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getListFavoriteMovies(id, token!);
      const movies: MovieBackend[] = data.movies;
      const ids = movies.map((movie) => Number(movie.moviedbID));
      setMoviesIds(ids);
    };

    getMovies();
  }, [id, token]);

  return { moviesIds, setMoviesIds };
};
