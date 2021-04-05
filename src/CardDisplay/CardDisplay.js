import './CardDisplay.css'
import Card from '../Card/Card'
import Form from '../Form/Form'

const CardDisplay = ( { movies } ) => {
  const moviesToDisplay =  movies.map(movie => {
          return (
            <Card
              title={movie.title}
              posterPath={movie.poster_path}
              averageRating={movie.average_rating}
              releaseDate={movie.release_date}
              id={movie.id}
            />
          )
        })

  return (
      <>
        <Form filterMovies={filterMovies}/>
        <div className='card-display'>
         {!movies.length && <p className='loading'>Loading Will Robinson</p>}
        {moviesToDisplay}
        </div>
      </>
      
  )
}

export default CardDisplay