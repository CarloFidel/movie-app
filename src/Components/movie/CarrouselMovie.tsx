import { MovieCard } from './MovieCard'
import { movieTrendin } from '../../mock_data/trandinMovie.fake'

export const CarrouselMovie = () => {
  return (
      <section className="mask-card-container flex flex-col items-center justify-center w-full px-2 overflow-x-auto mb-5 py-2">
        <article className="flex gap-8 w-fit mb-5">
          {movieTrendin.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </article>
      </section>
  )
}
