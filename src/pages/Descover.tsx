import { useState } from "react";
import { CarrouselMovie } from "../Components/movie/CarrouselMovie";
import { useGetTrendingMovies } from "../Components/movie/hooks/useGetTrendingMovies";
import SearchBar from "../Components/shared/SearchBar";
import { getMoviesByName } from "../services/movies/actions/get-list-movies-from-tmdb";
import type { Movie } from "../interfaces/movie.interface";

export const Descover = () => {
  const { moviesPopular } = useGetTrendingMovies(2);

  const otherMovies = useGetTrendingMovies(3).moviesPopular;

  const [moviesByQuery, setmoviesByQuery] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    const movies = await getMoviesByName(query);
    setmoviesByQuery(movies);
  };

  return (
    <>
      <h2 className="text-center w-full font-ma-medium text-primary-600 dark:text-primary-500 text-4xl mt-20">
        Descrubre tu película favorita
      </h2>
      <SearchBar onQuery={handleSearch} />
      {moviesByQuery.length > 0 ? (
        <CarrouselMovie movies={moviesByQuery} />
      ) : (
        <>
          <CarrouselMovie movies={moviesPopular} />
          <CarrouselMovie movies={otherMovies} />
        </>
      )}
    </>
  );
};
