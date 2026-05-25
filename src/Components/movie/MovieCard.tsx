import { useNavigate } from "react-router";
import type { Movie } from "../../interfaces/movie";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleCardClick = (movieId: number) => {
    navigate(`/detail/${movie.id}`);
    console.log(`Película seleccionada: ${movieId}`);
  };

  const toogleLoveClick = (title: string) => {
    console.log(`Se ha añadido la peli ${title} a tus pelis favoritas`);
    setIsFavorite(prev => !prev);
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
        onClick={() => handleCardClick(movie.id)}
      ></img>
      <div className="flex justify-between items-center pr-4">
        <h2 className="text-start w-30">{movie.title}</h2>
        {isFavorite === false ? (
          <IoHeartOutline
            className="top-5 right-2 z-10 text-red-500/70 "
            size={25}
            onClick={() => toogleLoveClick(movie.title)}
          />
        ) : (
          <IoHeart
            className="top-5 right-2 z-10 text-red-500/70 "
            size={25}
            onClick={() => toogleLoveClick(movie.title)}
          />
        )}
      </div>
    </div>
  );
};
