import { useParams } from "react-router";

import { CarrouselMovie } from "../Components/movie/CarrouselMovie";
import { IoCheckmark, IoPlayCircleOutline } from "react-icons/io5";
import { useGetMovieDetails } from "../Components/movie/hooks/useGetMovieDetails";
import { useGetActorCast } from "../Components/movie/hooks/useGetActorCast";
import LoadingComponent from "../Components/shared/LoadingComponent";
import ErrorComponent from "../Components/shared/ErrorComponent";
import { useSetFavoriteMovie } from "../Components/movie/hooks/useSetFavoriteMovie";
import { useIsFavorite } from "../Components/movie/hooks/useIsFavorite";

export const Detail = () => {
  const { id } = useParams<string>();
  const movieId: number = Number(id);

  const { movie, isLoading, hasError, backgroundImage } =  useGetMovieDetails(movieId);
  const { cast, isLoadingCast, hasErrorCast } = useGetActorCast(movieId);

  const { handleAddFavorite } = useSetFavoriteMovie({
    movie: movie!,
    movieId,
    go: false,
  });

  const { isFavorite } = useIsFavorite(movieId);

  if (isLoading || isLoadingCast) return <LoadingComponent />;

  if (hasError || hasErrorCast) {
    const error = "Ha habido eun error en la carga de la película";
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      <section className="flex gap-2 w-full py-10 items-center ">
        <div className="flex flex-col gap-8 w-2/3">
          <h1 className="font-ma-medium text-gray-700 dark:text-gray-200 text-7xl mask-b-from-0.5">
            {movie!.title}
          </h1>
          <p className="w-3xl font-ma-light text-left text-2xl">
            {movie!.overview}
          </p>
          <div className="flex flex-row gap-8 w-full">
            <button className="flex flex-row gap-2 items-center justify-center bg-indigo-950 dark:bg-primary-800 px-18 py-4 rounded-2xl text-white cursor-pointer">
              Ver Trailer <IoPlayCircleOutline size={25} />
            </button>

            {isFavorite ? (
              <button
                disabled
                className="flex flex-row gap-2 items-center justify-center border border-gray-400 text-gray-700 dark:text-gray-300 px-18 py-4 rounded-2xl"
              >
                <IoCheckmark size={25} className="text-green-600" />
              </button>
            ) : (
              <button
                onClick={handleAddFavorite}
                className="flex flex-row gap-2 items-center justify-center border border-gray-400 text-gray-700 dark:text-gray-300 px-18 py-4 rounded-2xl cursor-pointer"
              >
                Agregar a favoritos
              </button>
            )}
          </div>
        </div>
        <div
          className="mask-detail w-full h-120 bg-cover bg-center bg-no-repeat rounded-l-xl"
          style={{ backgroundImage: backgroundImage }}
        ></div>
      </section>
      <h2 className="text-start w-full">Cast</h2>
      <CarrouselMovie cast={cast!} />
    </>
  );
};
