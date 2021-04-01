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
      error: false
    }
  }

  componentDidMount() {
    movieCall().then(data => this.setState({movies: data.movies})).catch(err => this.setState({error: true}) )
  }


  render() {
    return (
      <>
        <Header/>

        {/* <Route path='/'>
          <CardDisplay movies={this.state.movies} getMovieDetails={this.getMovieDetails}/>
        </Route> */}
        <Route exact path='/' render={() => 
        <CardDisplay movies={this.state.movies} getMovieDetails={this.getMovieDetails}/>
        }/>

        {/* {this.state.movies.length > 0 && !this.state.currentMovie.length && <CardDisplay 
        movies={this.state.movies} getMovieDetails={this.getMovieDetails}/>} */}

        <Route path='/movie/:id' render={({match}) => 
        <MovieDetails id={ match.params.id } goBackToHome={this.goBackToHome} />
        }/>

        {this.state.error && 
        <h3>We can't load the movies you're looking for, please refresh and try again!</h3>
        }

        

        
      </>
    )
  }
}


export default App;
