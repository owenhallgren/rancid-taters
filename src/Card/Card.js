import './CardStyles.css'

const Card = ({ title, posterPath, averageRating, releaseDate }) => {
return (
    <div className='movie-card'>
      <h3>{title}</h3>
      <img src={posterPath}/>
      <p>{averageRating}</p>
      <p>{releaseDate}</p>
    </div>
)
}

export default Card