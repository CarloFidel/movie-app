import { CarrouselMovie } from "../../Components/movie/CarrouselMovie";
import LoadingComponent from "../../Components/shared/LoadingComponent";
import { useGetFavoriteMovies } from "../../hooks/useGetFavoriteMovies";
import { useGetMoviedbId } from "../../hooks/useGetMoviedbId";

function FavoritesMovies() {
  const { moviesIds } = useGetMoviedbId();
  const favoriteMovies = useGetFavoriteMovies(moviesIds);

  if (!favoriteMovies) return <LoadingComponent />;

  return (
    <div className=" w-5xl">
      <h2 className="text-center w-full font-ma-medium text-primary-600  dark:text-primary-400 text-5xl mb-5">
        Películas favoritas
      </h2>
      <CarrouselMovie showHartIcon={false} movieTrendin={favoriteMovies} />
    </div>
  );
}

export default FavoritesMovies;
