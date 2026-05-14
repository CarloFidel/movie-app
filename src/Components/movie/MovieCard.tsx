import { useNavigate } from "react-router";
import type { Movie } from "../../interfaces/movie";


interface Props {
  movie: Movie
}

export const MovieCard = ({movie}: Props) => {

  const navigate = useNavigate()

  const handleCardClick = (movieId: number) => {
    navigate(`/detail/${movie.id}`)
    console.log(`Película seleccionada: ${movieId}`);
  }



  return (
    <div
      className="flex w-max flex-col gap-2 hover:cursor-pointer"
      key={movie.id}
      onClick={() => handleCardClick(movie.id)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="h-80 w-full rounded-3xl object-cover shadow-lg shadow-gray-700/60 hover:scale-102 hover:shadow-xl dark:shadow-gray-700/60 transition duration-200"
      ></img>
      <h2 className="text-start">{movie.title}</h2>
    </div>
  );
};
