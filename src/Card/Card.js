import './CardStyles.css'

const Card = ({ title, posterPath, averageRating, releaseDate, id, getMovieDetails }) => {

  const roundedRating = Math.round(averageRating * 10)/10


return (
    <div className='movie-card' onClick={() => getMovieDetails(id)}>
      <h3>{title}</h3>
      <img src={posterPath}/>
      <p>Average Rating: {roundedRating} 🥔 's</p>
      <p>Release Date: {releaseDate}</p>
    </div>
)
}

export default Card