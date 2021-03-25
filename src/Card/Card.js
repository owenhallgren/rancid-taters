import './CardStyles.css'

const Card = ({ title, posterPath, averageRating, releaseDate, id }) => {

  const roundedRating = Math.round(averageRating * 10)/10

  const getMovieDetails = (movieID) => {
    console.log(movieID)
  }

return (
    <div className='movie-card' onClick={() => getMovieDetails(id)}>
      <h3>{title}</h3>
      <img src={posterPath}/>
      <p>Average Rating: {roundedRating}🥔</p>
      <p>Release Date: {releaseDate}</p>
    </div>
)
}

export default Card