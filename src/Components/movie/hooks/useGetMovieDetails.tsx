import { useEffect, useState } from "react";
import type { Movie } from "../../../interfaces/movie.interface";
import { getMovieDetails } from "../../../services/movies/actions/get-movie-details";

export const useGetMovieDetails = (id: number) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<string>();
  const [backgroundImage, setBackgroundImage] = useState<string>();

  useEffect(() => {
    const getMovieDetail = async (movieId: number) => {
      try {
        setIsLoading(true);
        setHasError('');

        const detail: Movie = await getMovieDetails(movieId);
        setMovie(detail);
        setBackgroundImage(
          `url(https://image.tmdb.org/t/p/w1280${detail!.backdrop_path})`,
        );
      } catch (error) {
        setHasError(`${error}`);
        setMovie(null);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetail(id);
  }, [id]);

  return {
    movie,
    isLoading,
    hasError,
    backgroundImage,
  };
};
