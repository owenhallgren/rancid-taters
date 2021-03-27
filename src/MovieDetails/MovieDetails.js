import './MovieDetails.css'

const MovieDetails = ({ title, posterPath, backDropPath,releaseDate, overview, averageRating, genres, budget, revenue, runtime, tagline, goBackToHome}) => {
  return(
    <div className='movie-details'>
    <button className='go-back-button' onClick={() => goBackToHome()}>Go Back</button>
      <img src={backDropPath} className='back-drop'/>
      <section className='details-section'>
        <div>
          <img src={posterPath}/>
          <p>{averageRating} 🥔</p>
        </div>
        <div className='details-section'>
          <h2>{title}</h2>
          <div className='genreDisplay'>{genres.map(genre => <p className='genre'>{genre} </p>)}</div>
          <p>{runtime} minutes</p>
          <p>{releaseDate}</p>
        </div>
        <p className='overview details-section'>{overview}</p>
      </section>
    </div>
  )
}  

export default MovieDetails