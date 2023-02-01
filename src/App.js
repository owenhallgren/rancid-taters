import './App.css';
import { Component } from 'react'
import CardDisplay from './CardDisplay/CardDisplay'
import Header from './Header/Header'
import MovieDetails from './MovieDetails/MovieDetails'
import { Route } from "react-router-dom";
import { movieCall } from './apiCalls';
var worldMapData = require('city-state-country');

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
    const citiesList = worldMapData.searchCity('Paris');
    console.log(citiesList)
    movieCall().then(data => this.setState({ movies: data.movies }))
  }

  filterMovies = (input) => {
    const filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(input))
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
      </div>
    )
  }
}


export default App;
