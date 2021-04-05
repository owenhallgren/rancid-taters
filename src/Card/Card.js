import './CardStyles.css'
import { Link } from 'react-router-dom'

const Card = ({ title, posterPath, averageRating, releaseDate, id }) => {

  const roundedRating = Math.round(averageRating * 10)/10

  return (
    <Link to={`/movie/${id}`} style={{textDecoration:'none'}}>
      <div className='movie-card'>
        <h4>{title}</h4>
        <img src={posterPath} className='home-poster'alt={`Movie Poster For ${title}`}/>
        <p>Average Rating: {roundedRating} 🥔' s</p>
        <p>Release Date: {releaseDate}</p>
      </div>
    </Link>   
  )
}

export default Card