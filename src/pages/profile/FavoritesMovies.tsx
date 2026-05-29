import { CarrouselMovie } from "../../Components/movie/CarrouselMovie";
import { useGetFavoriteMovies } from "../../Components/movie/hooks/useGetFavoriteMovies";
import { useGetMoviedbId } from "../../Components/movie/hooks/useGetMoviedbId";
import ErrorComponent from "../../Components/shared/ErrorComponent";
import LoadingComponent from "../../Components/shared/LoadingComponent";
import { useFilteredMovies } from "../../Components/movie/hooks/useFilteredMovies";
import { useGetGenresFromTMDB } from "../../Components/movie/hooks/useGetGenresFromTMDB";

function FavoritesMovies() {
  const { moviesIds } = useGetMoviedbId();
  const { favoriteMovies, error, loading } = useGetFavoriteMovies(moviesIds);
  const { genres, loadingGenres } = useGetGenresFromTMDB();
  const { filteredMovies, handleTerm } = useFilteredMovies(favoriteMovies);

  if (loading || loadingGenres) return <LoadingComponent />;

  if (error) return <ErrorComponent error={error} />;

  return (
    <>
      <div className=" w-5xl flex flex-row">
        <h2 className="text-start w-full font-ma-medium text-primary-600  dark:text-primary-500 text-shadow-2xs text-4xl mb-5">
          Películas favoritas
        </h2>
        <select
          onChange={(event) => handleTerm(event.target.value)}
          className="border border-gray-300 dark:border-gray-700 px-4 rounded-3xl backdrop-blur"
        >
          <option value="">Elija un género</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <CarrouselMovie showHartIcon={false} movies={filteredMovies} />
    </>
  );
}

export default FavoritesMovies;
