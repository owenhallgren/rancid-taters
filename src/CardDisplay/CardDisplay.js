import { findAllByTitle } from "@testing-library/react"
import './CardDisplay.css'
import Card from '../Card/Card'

const CardDisplay = ( { movies, getMovieDetails } ) => {
  return (
    <div className='card-display'>
      {movies.movies && movies.movies.map(movie => {
        return (
          <Card
            title={movie.title}
            posterPath={movie.poster_path}
            averageRating={movie.average_rating}
            releaseDate={movie.release_date}
            id={movie.id}
            getMovieDetails={getMovieDetails}
          />
        )
      })}
    </div>
  )
}

export default CardDisplay