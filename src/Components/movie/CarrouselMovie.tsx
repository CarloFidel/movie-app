import type { CastElement } from "../../interfaces/cast.interface";
import type { Movie } from "../../interfaces/movie.interface";
import { MovieCard } from "./MovieCard";
import { ActorCard } from "./ActorCard";

interface Props {
  movies?: Movie[];
  cast?: CastElement[];
  showHartIcon?: boolean;
}

export const CarrouselMovie = ({
  movies,
  cast,
  showHartIcon = true,
}: Props) => {
/*   const filterMovie = movies?.filter((movie) =>
    movie.genre_ids.some((id) => id === filterTerm),
  );
  console.log(filterMovie); */

  return (
    <section className="mask-card-container flex w-full overflow-x-auto py-2 scrollbar-none">
      <article className="flex w-max gap-8 px-8">
        {movies &&
          movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              showHartIcon={showHartIcon}
            />
          ))}
        {cast &&
          cast.map((actor) => <ActorCard actor={actor} key={actor.id} />)}
      </article>
    </section>
  );
};
