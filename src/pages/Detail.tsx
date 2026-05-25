import { useParams } from "react-router";
import { movieTrendin } from "../mock_data/trandinMovie.fake";
import { CarrouselMovie } from "../Components/movie/CarrouselMovie";
import { castResponse } from "../mock_data/cast.fake";
import { IoPlayCircleOutline } from "react-icons/io5";

export const Detail = () => {
  const { id } = useParams<string>();
  const movie = movieTrendin.find((movie) => movie.id === Number(id));

  if (!movie) throw new Error(`No movie founded mith id ${id}`);

  const backgroundImage = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
  console.log(castResponse);

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
      <CarrouselMovie cast={castResponse.cast} />
    </>
  );
};
