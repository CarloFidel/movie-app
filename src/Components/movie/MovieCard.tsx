import { useNavigate } from "react-router";
import type { Movie } from "../../interfaces/movie.interface";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { use, useState } from "react";
import { createFavoriteMovie } from "../../services/users/actions/user-api-movieMate";
import { AuthContext } from "../../contexts/user/AuthContext";

interface Props {
  movie: Movie;
  showHartIcon?: boolean;
}

export const MovieCard = ({ movie, showHartIcon = true }: Props) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const authContext = use(AuthContext);
  const { token } = authContext!;

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${movie.id}`);
  };

  const handleAddToFavorites = async (movieId: number) => {
    setIsFavorite((prev) => !prev);
    const response = await createFavoriteMovie(movieId, movie.title, token!);
    if (response) navigate("/profile/favorites_movies");
  };

  return (
    <div
      className=" flex w-max flex-col gap-2 hover:cursor-pointer"
      key={movie.id}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="h-80 w-full rounded-3xl object-cover shadow-lg shadow-gray-700/70 hover:scale-102 hover:shadow-xl dark:shadow-indigo-950/60 transition duration-200"
        onClick={handleCardClick}
      ></img>
      <div className="flex justify-between items-start pr-4">
        <h2 className="text-start w-30">{movie.title}</h2>
        {showHartIcon &&
          (isFavorite === false ? (
            <IoHeartOutline
              className="top-5 right-2 z-10 text-primary-600 dark:text-primary-600/50 "
              size={25}
              onClick={() => handleAddToFavorites(movie.id)}
            />
          ) : (
            <IoHeart
              className="top-5 right-2 z-10 text-primary-600 dark:text-primary-600/50  "
              size={25}
              onClick={() => handleAddToFavorites(movie.id)}
            />
          ))}
      </div>
    </div>
  );
};
