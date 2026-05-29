import type { Movie } from "../../interfaces/movie.interface";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useSetFavoriteMovie } from "./hooks/useSetFavoriteMovie";
import { useIsFavorite } from "./hooks/useIsFavorite";

interface Props {
  movie: Movie;
  showHartIcon?: boolean;
}

export const MovieCard = ({ movie, showHartIcon = true }: Props) => {

  const { handleAddFavorite, navigate, loading, user } = useSetFavoriteMovie({
    movie: movie!,
    movieId: movie.id,
    go: false,
  });

  const { isFavorite } = useIsFavorite(movie.id);

  return (
    <div
      className=" flex w-max flex-col gap-2 hover:cursor-pointer"
      key={movie.id}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="h-80 w-full rounded-3xl object-cover shadow-lg shadow-gray-700/70 hover:scale-102 hover:shadow-xl dark:shadow-indigo-950/60 transition duration-200"
        onClick={() => navigate(`/detail/${movie.id}`)}
  
      ></img>
      <div className="flex justify-between items-start pr-4">
        <h2 className="text-start w-30">{movie.title}</h2>
        {user &&
          (!loading ? (
            showHartIcon &&
            (isFavorite ? (
              <IoHeart
                className="top-5 right-2 z-10 text-primary-600 dark:text-primary-600/50  "
                size={25}
              />
            ) : (
              <IoHeartOutline
                className="top-5 right-2 z-10 text-primary-600 dark:text-primary-600/50 "
                size={25}
                onClick={() => handleAddFavorite()}
              />
            ))
          ) : (
            <div className="w-6 h-6 border-dashed border border-t-2 border-b-3 border-primary-600 rounded-full animate-spin"></div>
          ))}
      </div>
    </div>
  );
};
