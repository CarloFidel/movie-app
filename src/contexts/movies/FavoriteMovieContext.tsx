import { createContext } from "react";
import type { Movie } from "../../interfaces/movie.interface";

interface MovieContextType {
  favoriteMovies: Movie[] | null;
  setFavoriteMovies: React.Dispatch<React.SetStateAction<Movie[] | null>>;
}

export const FavoriteMovieContext = createContext<MovieContextType | null>(
  null,
);
