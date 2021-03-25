import { findAllByTitle } from "@testing-library/react"
import Card from '../Card/Card'

const CardDisplay = ( { movies } ) => {
  return (
    <>
      {movies.movies && movies.movies.map(movie => {
        return (
          <Card
            title={movie.title}
            posterPath={movie.poster_path}
            averageRating={movie.average_rating}
            releaseDate={movie.release_date}
          />
        )
      })}
    </>
  )
}

export default CardDisplay