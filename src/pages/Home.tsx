import { useNavigate } from "react-router";
import { CarrouselMovie } from "../Components/movie/CarrouselMovie";
import { useEffect, useState } from "react";
import { getListPopularMovies } from "../services/movies/actions/get-list-movies-from-tmdb";
import type { Movie } from "../interfaces/movie";

export const Home = () => {
  const navigate = useNavigate();

  const [moviesPopular, setMoviesPopular] = useState<Movie[]>();
  console.log(moviesPopular)

  useEffect(() => {
    const getmovies = async () => {
      const movies: Movie[] = await getListPopularMovies();
      setMoviesPopular(movies);
    };

    getmovies();
  }, []);

  return (
    <>
      <section className="relative flex flex-col items-center justify-center py-20 gap-10">
        <div className="mask-hero absolute inset-0 bg-[url('https://image.tmdb.org/t/p/w500//eRl6nmF8qb3q8cSoIHswnh97SI.jpg')] bg-cover bg-center opacity-30 rounded-3xl"></div>

        <h1 className="font-ma-medium text-indigo-950 dark:text-primary-400 text-8xl mask-b-from-0.5">
          <a href="/">CINEMATE</a>
        </h1>
        <p className="font-ma-light text-center text-2xl w-2/3">
          Si vives como si estuvieras en una película, si siempre quieres ver un
          capítulo más o si sabes que el cine te puede cambiar la vida.{" "}
        </p>
        <form
          action=""
          className="flex flex-col items-center justify-center gap-2"
        >
          <div className="flex flex-row mt-10 gap-2 z-1">
            <input
              type="text"
              id="email"
              placeholder="Tu mail"
              className="border border-gray-400 dark:border-gray-700 px-4 py-2 rounded-l-2xl outline-none backdrop-blur bg-white/5"
            />
            <button className="dark:text-gray-400 px-4 py-2 rounded-r-2xl outline-none backdrop-blur bg-white/5 border border-gray-400 dark:border-gray-700 text-gray-600 hover:cursor-pointer active:scale-95 transition duration-75">
              Empezar
            </button>
          </div>

          <a
            className="dark:text-gray-400 font-ma-light text-sm underline cursor-pointer z-1"
            onClick={() => navigate("/register")}
          >
            Regístrate
          </a>
        </form>
      </section>
      <h2 className="text-start w-full">Trending Movies</h2>
      <CarrouselMovie movieTrendin={moviesPopular} />
      <h2 className="text-start w-full">Trending TV-Series</h2>
      <CarrouselMovie />
    </>
  );
};
