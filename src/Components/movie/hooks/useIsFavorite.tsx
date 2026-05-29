import { use } from "react";
import { FavoriteMovieContext } from "../../../contexts/movies/FavoriteMovieContext";

export const useIsFavorite = (movieId: number) => {

  const userMovies = use(FavoriteMovieContext);
  const { favoriteMovies } = userMovies!;

  const isFavorite = favoriteMovies?.some((movie) => movie.id === movieId);

  return { isFavorite };
};
