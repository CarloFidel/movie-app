import { use, useEffect, useState } from "react";
import type { User } from "../interfaces/user.interface";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { getOnebyId } from "../services/users/actions/user-api-movieMate";
import { getUserFromJwData } from "../utility/get-user-from-token";
import { FavoriteMovieContext } from "../contexts/movies/FavoriteMovieContext";
import { useGetMoviedbId } from "../Components/movie/hooks/useGetMoviedbId";
import { useGetFavoriteMovies } from "../Components/movie/hooks/useGetFavoriteMovies";

export const useGetUserData = () => {
  const [user, setUser] = useState<User>();

  const isAdmin = user?.roles?.includes("admin") ?? false;

  const authContext = use(AuthContext);

  const { token, logout } = authContext!;
  const { id } = getUserFromJwData(token!);

  const { moviesIds } = useGetMoviedbId();
  const movies = useGetFavoriteMovies(moviesIds).favoriteMovies;

  const moviescontext = use(FavoriteMovieContext);
  const { favoriteMovies, setFavoriteMovies } = moviescontext!;
  useEffect(() => {
    setFavoriteMovies(movies);
  }, [movies, setFavoriteMovies]);

  useEffect(() => {
    const getUserById = async (id: string) => {
      const user = await getOnebyId(id, token!);
      setUser(user);
    };
    getUserById(id);
  }, [id, token]);

  return {
    user,
    isAdmin,
    logout,

    favoriteMovies,
  };
};
