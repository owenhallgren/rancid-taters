import './MovieDetails.css'

const MovieDetails = ({ title, posterPath, backDropPath,releaseDate, overview, averageRating, genres, budget, revenue, runtime, tagline, goBackToHome}) => {
  const roundedRating = Math.round(averageRating * 10)/10
  return(
    <div className='movie-details'>
    <button className='go-back-button' onClick={() => goBackToHome()}>Go Back</button>
      <img src={backDropPath} className='back-drop'/>
      <section className='details-section'>
        <div>
          <img src={posterPath} className='poster'/>
          <p>{roundedRating} 🥔 's</p>
        </div>
        <div className='details-section'>
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