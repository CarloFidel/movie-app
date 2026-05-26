import { useNavigate } from "react-router";
import { CarrouselMovie } from "../Components/movie/CarrouselMovie";
import { use, useEffect, useState } from "react";
import { getListPopularMovies } from "../services/movies/actions/get-list-movies-from-tmdb";
import type { Movie } from "../interfaces/movie.interface";
import { useForm } from "react-hook-form";
import type { User } from "../interfaces/user.interface";
import { loginUser } from "../services/users/actions/user-api-movieMate";
import { AuthContext } from "../contexts/user/AuthContext";

export const Home = () => {
  const navigate = useNavigate();

  const authContext = use(AuthContext);
  const { login } = authContext!;

  const [moviesPopular, setMoviesPopular] = useState<Movie[]>();

  useEffect(() => {
    const getmovies = async () => {
      const movies: Movie[] = await getListPopularMovies();
      setMoviesPopular(movies);
    };

    getmovies();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = handleSubmit(async (data) => {
    const response = await loginUser(data);
    const token = response.token;

    const userResponse = {
      email: response.email,
      fullName: response.fullName,
    };
    if (token) {
      login(token, userResponse);
      navigate("/profile");
    }

  });
  return (
    <>
      <section className="relative flex flex-col items-center justify-center py-15 gap-5">
        <div className="mask-hero absolute inset-0 bg-[url('https://image.tmdb.org/t/p/w500//eRl6nmF8qb3q8cSoIHswnh97SI.jpg')] bg-cover bg-center opacity-30 rounded-3xl"></div>

        <h1 
        className="font-ma-medium text-indigo-950 dark:text-primary-400 text-8xl mask-b-from-0.5"
        >
          <p>CINEMATE</p>
        </h1>
        <p className="font-ma-light text-center text-2xl w-2/3">
          Si vives como si estuvieras en una película, si siempre quieres ver un
          capítulo más o si sabes que el cine te puede cambiar la vida.{" "}
        </p>

        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-center gap-2"
        >
          <div className="flex flex-col">
            <input
              type="text"
              id="email"
              placeholder="Tu mail"
              className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-2xl outline-none backdrop-blur bg-white/5"
              {...register("email", {
                required: {
                  value: true,
                  message: "El mail no puede estar vacío",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                  message: "El correo no es válido",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 dark:text-red-300 text-[12px] ml-2 mt-1">
                {String(errors.email.message)}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              id="password"
              placeholder="Tu Contraseña"
              className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-2xl outline-none backdrop-blur bg-white/5"
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña no puede estar vacía",
                },
                pattern: {
                  value:
                    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message:
                    "La contraseña debe incluir mayúsculas, minúsculas y al menos un número o símbolo",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 dark:text-red-300 text-[12px] ml-2 mt-1">
                {String(errors.password.message)}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-indigo-800/60 text-gray-300 dark:text-gray-800 dark:bg-primary-500 hover:cursor-pointer font-ma-light text-sm w-full z-10 dark:border-gray-700 px-4 py-3 rounded-2xl outline-none active:scale-95 transition duration-75"
          >
            Empezar
          </button>

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
    </>
  );
};
