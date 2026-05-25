import { useParams } from "react-router";
import { CarrouselMovie } from "../Components/movie/CarrouselMovie";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import type { Movie } from "../interfaces/movie.interface";
import { getMovieDetails } from "../services/movies/actions/get-movie-details";
import type { CastElement } from "../interfaces/cast.interface";
import { getCast } from "../services/movies/actions/get-cast-from-movie";

export const Detail = () => {
  const { id } = useParams<string>();
  const movieId: number = Number(id);

  const [movie, setMovie] = useState<Movie | null>(null);
  const [cast, setCast] = useState<CastElement[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getDetail = async (movieId: number) => {
      try {
        setIsLoading(true);
        setHasError(false);

        const detail: Movie = await getMovieDetails(movieId);
        setMovie(detail);
      } catch (error) {
        console.error(error);
        setHasError(true);
        setMovie(null);
      } finally {
        setIsLoading(false);
      }
    };

    getDetail(movieId);
  }, [id, movieId]);

  useEffect(() => {
    const getCastfromMovie = async (movieId: number) => {
      try {
        setIsLoading(true);
        setHasError(false);

        const cast: CastElement[] = await getCast(movieId);
        setCast(cast);
      } catch (error) {
        console.error(error);
        setHasError(true);
        setMovie(null);
      } finally {
        setIsLoading(false);
      }
    };

    getCastfromMovie(movieId);
  }, [id, movieId]);

  if (isLoading) return <p>Loading movie...</p>;

  if (hasError) return <p>There was a problem loading movie {id}.</p>;

  if (!movie) return <p>No movie found with id {id}.</p>;

  if (!cast) return <p>No movie found with id {id}.</p>;

  const backgroundImage = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;

  return (
    <>
      <section className="flex gap-2 w-full py-10 items-center ">
        <div className="flex flex-col gap-8 w-2/3">
          <h1 className="font-ma-medium text-gray-700 dark:text-gray-200 text-7xl mask-b-from-0.5">
            {movie.title}
          </h1>
          <p className="w-3xl font-ma-light text-left text-2xl">
            {movie.overview}
          </p>
          <div className="flex flex-row gap-8 w-full">
            <button className="flex flex-row gap-2 items-center justify-center bg-indigo-950 dark:bg-primary-800 px-18 py-4 rounded-2xl text-white cursor-pointer">
              Ver Trailer <IoPlayCircleOutline size={25} />
            </button>
            <button className="flex flex-row gap-2 items-center justify-center border border-gray-400 text-gray-700 dark:text-gray-300 px-18 py-4 rounded-2xl cursor-pointer">
              Agregar a favoritos
            </button>
          </div>
        </div>
        <div
          className="mask-detail w-full h-120 bg-cover bg-center bg-no-repeat rounded-l-xl"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      </section>
      <h2 className="text-start w-full">Cast</h2>
      <CarrouselMovie cast={cast} />
    </>
  );
};
