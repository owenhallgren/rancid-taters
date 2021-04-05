import './CardStyles.css'
import { Link } from 'react-router-dom'

const Card = ({ title, posterPath, averageRating, releaseDate, id, getMovieDetails }) => {

  const roundedRating = Math.round(averageRating * 10)/10


return (
  <Link to={`/movie/${id}`} style={{textDecoration:'none'}}>
    <div className='movie-card'>
      <h2>{title}</h2>
      <img src={posterPath} className='home-poster'alt={`Movie Poster For ${title}`}/>
      <p>Average Rating: {roundedRating} 🥔 's</p>
      <p>Release Date: {releaseDate}</p>
    </div>
  </Link>
    
)
}

export default Card