import { useEffect, useState } from "react";
import type { CastElement } from "../../../interfaces/cast.interface";
import { getCast } from "../../../services/movies/actions/get-cast-from-movie";

export const useGetActorCast = (movieId: number) => {
  const [cast, setCast] = useState<CastElement[] | null>(null);
  const [isLoadingCast, setIsLoadingCast] = useState(true);
  const [hasErrorCast, setHasErrorCast] = useState(false);

  useEffect(() => {
    const getCastfromMovie = async (movieId: number) => {
      try {
        setIsLoadingCast(true);
        setHasErrorCast(false);

        const cast: CastElement[] = await getCast(movieId);
        setCast(cast);
      } catch (error) {
        console.error(error);
        setHasErrorCast(true);
      } finally {
        setIsLoadingCast(false);
      }
    };

    getCastfromMovie(movieId);
  }, [movieId]);

  return {
    cast,
    isLoadingCast,
    hasErrorCast,
  };
};
