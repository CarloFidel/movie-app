import { use, useState } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router";
import type { Movie } from "../../../interfaces/movie.interface";
import { createFavoriteMovie } from "../../../services/users/actions/user-api-movieMate";
import { FavoriteMovieContext } from "../../../contexts/movies/FavoriteMovieContext";

interface Props {
  movie: Movie;
  movieId: number;
  go?: boolean;
}
export const useSetFavoriteMovie = ({ movie, movieId, go = true }: Props) => {
  const [loading, setIsloading] = useState<boolean>(false);

  const authContext = use(AuthContext);
  const { token, user } = authContext!;

  const favoriteMovieContext = use(FavoriteMovieContext);
  const { favoriteMovies, setFavoriteMovies } = favoriteMovieContext!;

  const navigate = useNavigate();

  const handleAddFavorite = async () => {
    setIsloading(true);
    try {
      if (movie) {
        const response = await createFavoriteMovie(
          movieId,
          movie.title,
          token!,
        );

        if (response) {
          setFavoriteMovies([...(favoriteMovies || []), movie]);
          setIsloading(false);
          if (go) navigate("/profile/favorites_movies");
        }
      }
    } catch (error) {
      console.log(`${error}`);
    }
  };

  return { handleAddFavorite, navigate, loading, user };
};
