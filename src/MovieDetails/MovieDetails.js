import './MovieDetails.css'
import { Component } from 'react'
import { render } from '@testing-library/react'
import { Link } from 'react-router-dom'
import { getMovieDetails, getTrailer } from '../apiCalls'
import ReactPlayer from 'react-player/youtube'

class MovieDetails extends Component {
  constructor() {
    super()
    this.state = {
      currentMovie: [],
      trailer: []
    }
  }

  componentDidMount() {
    getMovieDetails(this.props.id).then(data => this.setState({currentMovie: [data]}))
    getTrailer(this.props.id).then(data => this.setState({trailer: [data]}))
  }

  getVideo = () => {
    const foundTrailer = this.state.trailer[0].videos.find(v => v.type === "Trailer")
    if (foundTrailer.site === 'YouTube') {
      return (
        <>
          <div className="trailer">
            <ReactPlayer controls={true} width='360px' height='185px' url={`https://www.${foundTrailer.site.toLowerCase()}.com/watch?v=${foundTrailer.key}`} />
          </div>
        </>
      )
    } else {
      return null
    }
  }
  
  render() {
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
            <div className='info-section'>
              <h2>{currentMovie[0].movie.title}</h2>
              <div className='genreDisplay'>{currentMovie[0].movie.genres.map(genre => <p className='genre'>{genre} </p>)}</div>
              <p>{currentMovie[0].movie.runtime} minutes</p>
              <p>{currentMovie[0].movie.release_date}</p>
            </div>
            <p className='overview'>{currentMovie[0].movie.overview}</p>
            </section>
            {this.state.trailer.length && this.getVideo()}
        </div>
        }
        </>
      )
  }
  
}  

export default MovieDetails