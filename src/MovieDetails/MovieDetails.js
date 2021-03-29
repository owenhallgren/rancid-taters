import './MovieDetails.css'
import { Component } from 'react'
import { render } from '@testing-library/react'
import { Link } from 'react-router-dom'

class MovieDetails extends Component {
  constructor() {
    super()
    this.state = {
      currentMovie: []
    }
  }

  componentDidMount() {
    this.getMovieDetails(this.props.id)
  }
  
  getMovieDetails = (movieId) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
    .then((res) => {
      if(!res.ok) {
        throw Error('Can not find that movie on our end! Refresh and try again.')
      }
      return res.json()
    })
    .then(data => this.setState({currentMovie: [data]}))
  }
  
  render() {
    console.log(this.state)
    const { currentMovie } = this.state
    return(
      <>
      {
        currentMovie.length && 
      <div className='movie-details'>
        <Link to='/'>
          <button className='go-back-button'>Go Back</button>
        </Link>
          <img src={currentMovie[0].movie.backdrop_path} className='back-drop'/>
          <section className='details-section'>
            <div>
              <img src={currentMovie[0].movie.poster_path} className='poster'/>
              <p>{Math.round(currentMovie[0].movie.average_rating * 10)/10} 🥔 's</p>
            </div>
            <div className='details-section'>
              <h2>{currentMovie[0].movie.title}</h2>
              <div className='genreDisplay'>{currentMovie[0].movie.genres.map(genre => <p className='genre'>{genre} </p>)}</div>
              <p>{currentMovie[0].movie.runtime} minutes</p>
              <p>{currentMovie[0].movie.release_date}</p>
            </div>
            <p className='overview'>{currentMovie[0].movie.overview}</p>
          </section>
        </div>
        }
        </>
      )
  }
  
}  

export default MovieDetails