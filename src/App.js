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
    this.setState({ movies: movieData })
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
       
       
        {!this.state.currentMovie.length && <CardDisplay movies={this.state.movies} getMovieDetails={this.getMovieDetails}/>}

        {this.state.currentMovie && <MovieDetails movie={this.state.currentMovie[0]}/>}
      </>
    )
  }
}


export default App;
