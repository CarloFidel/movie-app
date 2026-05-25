import type { CastElement } from "../../interfaces/cast.interface";
import type { Movie } from "../../interfaces/movie.interface";
import { MovieCard } from "./MovieCard";
import { ActorCard } from "./ActorCard";

interface Props {
  movieTrendin?: Movie[];
  cast?: CastElement[];
}

export const CarrouselMovie = ({ movieTrendin, cast }: Props) => {
  return (
    <section className="mask-card-container flex w-full overflow-x-auto py-2 scrollbar-none">
      <article className="flex w-max gap-8 px-8">
        {movieTrendin &&
          movieTrendin.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        {cast &&
          cast.map((actor) => <ActorCard actor={actor} key={actor.id} />)}
      </article>
    </section>
  );
};
