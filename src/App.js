import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

import movieData from './TestData/movies-mock-data'
import Card from './Card/Card'
import CardDisplay from './CardDisplay/CardDisplay'
import Header from './Header/Header'
import MovieDetails from './MovieDetails/MovieDetails'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { movieCall } from './apiCalls';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: [],
      currentMovie: [],
      filteredMovies: []
    }
  }

  componentDidMount() {
    movieCall().then(data => this.setState({movies: data.movies}))
  }

  filterMovies = (input) => {
    let filteredMovies = this.state.movies.filter(movie => movie.title.includes(input))
    this.setState({ filteredMovies: filteredMovies})
  }


  render() {
    return (
      <div className='app'>
        <Header/>
         

        
        <Route exact path='/' render={() => 
        <CardDisplay movies={this.state.movies} getMovieDetails={this.getMovieDetails} filterMovies={this.filterMovies} filteredMovies={this.state.filteredMovies}/>
        }/>

        
        <Route path='/movie/:id' render={({match}) => 
        <MovieDetails id={ match.params.id } goBackToHome={this.goBackToHome} />
        }/>

        

        

        {/* {this.state.currentMovie.length && 
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
          goBackToHome={this.goBackToHome}
        />} */}
      </div>
    )
  }
}


export default App;
