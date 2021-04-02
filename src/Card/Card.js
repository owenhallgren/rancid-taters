import './CardStyles.css'
import { Link } from 'react-router-dom'

const Card = ({ title, posterPath, averageRating, releaseDate, id }) => {

  const roundedRating = Math.round(averageRating * 10)/10


return (
  <Link to={`/movie/${id}`} style={{textDecoration:'none'}}>
    <div className='movie-card'>
      <h3>{title}</h3>
      <img src={posterPath} alt='Movie Poster'/>
      <p>Average Rating: {roundedRating} 🥔 's</p>
      <p>Release Date: {releaseDate}</p>
    </div>
  </Link>
    
)
}

export default Card