import { useState } from "react";
import { FavoriteMovieContext } from "./FavoriteMovieContext";
import type { Movie } from "../../interfaces/movie.interface";


export const FavoriteMoviesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

const [favoriteMovies, setFavoriteMovies] = useState<Movie[] | null>(null)



  return (
    <FavoriteMovieContext value={{ favoriteMovies, setFavoriteMovies }}>
      {children}
    </FavoriteMovieContext>
  );
};
