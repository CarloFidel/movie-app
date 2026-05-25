import { useState } from "react";
import type { Movie } from "../../interfaces/movie.interface";
import { FavoriteMovieContext } from "./ContextFavoriteMovies";

export const FavoriteMoviesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  return (
    <FavoriteMovieContext value={{ favoriteMovies, setFavoriteMovies }}>
      {children}
    </FavoriteMovieContext>
  );
};
