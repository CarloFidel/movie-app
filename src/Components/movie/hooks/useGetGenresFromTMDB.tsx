import { useEffect, useState } from "react";
import { getMovieGenres } from "../../../services/movies/actions/get-movie-genres";

export const useGetGenresFromTMDB = () => {
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
  const [loadingGenres, setLoadingGenres] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      setLoadingGenres(true);
      const data = await getMovieGenres();
      setGenres(data);
      setLoadingGenres(false);
    };
    fetchGenres();
  }, []);

  return {
    genres,
    loadingGenres
  };
};
