import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import movieData from './TestData/movies-mock-data'
import Card from './Card/Card'
import CardDisplay from './CardDisplay/CardDisplay'
import Header from './Header/Header'
import MovieDetails from './MovieDetails/MovieDetails'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: [],
      currentMovie: []
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => res.json())
    .then(data => this.setState({movies: data.movies}))
  }

  getMovieDetails = (movieID) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
    .then(res => res.json())
    .then(data => this.setState({currentMovie: [data]}))
  }

  render() {
    return (
      <>
        <Header/>
       {console.log(this.state.movies)}

        {this.state.movies.length > 0 && !this.state.currentMovie.length && <CardDisplay 
        movies={this.state.movies} getMovieDetails={this.getMovieDetails}/>}

        {this.state.currentMovie.length && 
        <MovieDetails
          title={this.state.currentMovie[0].movie.title}
          posterPath={this.state.currentMovie[0].movie.poster_path}
          backDropPath={this.state.currentMovie[0].movie.backdrop_path}
          releaseDate={this.state.currentMovie[0].movie.release_date}
          overview={this.state.currentMovie[0].movie.overview}
          averageRating={this.state.currentMovie[0].movie.average_rating}
          genres={this.state.currentMovie[0].movie.genres}
          budget={this.state.currentMovie[0].movie.budget}
          revenue={this.state.currentMovie[0].movie.revenue}
          runtime={this.state.currentMovie[0].movie.runtime}
          tagline={this.state.currentMovie[0].movie.tagline}
        />}
      </>
    )
  }
}


export default App;
