import './CardStyles.css'

const Card = ({ title, posterPath, averageRating, releaseDate }) => {

  const roundedRating = Math.round(averageRating * 10)/10

return (
    <div className='movie-card'>
      <h3>{title}</h3>
      <img src={posterPath}/>
      <p>Average Rating: {roundedRating}🥔</p>
      <p>Release Date: {releaseDate}</p>
    </div>
)
}

export default Card