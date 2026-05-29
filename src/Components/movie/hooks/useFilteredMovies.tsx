import { useState } from "react";
import type { Movie } from "../../../interfaces/movie.interface";

export const useFilteredMovies = (favoriteMovies: Movie[]) => {
  const [filterTerm, setFilterTerm] = useState<number>();

  type Genre = { id: number; name: string };
  const filteredMovies = filterTerm
    ? favoriteMovies?.filter(
        (movie) =>
          Array.isArray((movie as { genres?: Genre[] }).genres) &&
          (movie as { genres?: Genre[] }).genres!.some(
            (g) => g.id === filterTerm,
          ),
      )
    : favoriteMovies;

  const handleTerm = (value: string) => {
    setFilterTerm(Number(value));
  };

  return {
    filteredMovies,
    handleTerm,
  };
};
