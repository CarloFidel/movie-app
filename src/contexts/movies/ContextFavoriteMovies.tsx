import { createContext } from "react";
import type { Movie } from "../../interfaces/movie";

interface MovieContextType {
  favoriteMovies: Movie[];
  setFavoriteMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}

export const FavoriteMovieContext = createContext<MovieContextType | undefined>(undefined);