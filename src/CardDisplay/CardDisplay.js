import { findAllByTitle } from "@testing-library/react"
import './CardDisplay.css'
import Card from '../Card/Card'

const CardDisplay = ( { movies, getMovieDetails } ) => {
  console.log(movies)
  const moviesToDisplay =  movies.map(movie => {
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
        })
  return (
    
      <div className='card-display'>
        {moviesToDisplay}
      </div>
  )
}

export default CardDisplay