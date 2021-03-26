import './MovieDetails.css'

const MovieDetails = ({ title, posterPath, backDropPath,releaseDate, overview, averageRating, genres, budget, revenue, runtime, tagline}) => {
  return(
    <div className='movie-details'>
      <img src={backDropPath} className='back-drop'/>
      <section>
        
        <div>
          <img src={posterPath}/>
          <p>{averageRating} 🥔</p>
        </div>
        <div>
          <h2>{title}</h2>
          <div className='genreDisplay'>{genres.map(genre => <p className='genre'>{genre} </p>)}</div>
          <p>{runtime} minutes</p>
          <p>{releaseDate}</p>
        </div>
        <p className='overview'>{overview}</p>
      </section>
    </div>
  )
}  

export default MovieDetails