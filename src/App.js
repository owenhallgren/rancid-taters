import './App.css';
import { Component } from 'react'
import CardDisplay from './CardDisplay/CardDisplay'
import Header from './Header/Header'
import MovieDetails from './MovieDetails/MovieDetails'
import { Route } from "react-router-dom";
import { movieCall } from './apiCalls';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: [],
      currentMovie: [],
    }
  }

  componentDidMount() {
    movieCall().then(data => this.setState({ movies: data.movies }))
  }


  render() {
    return (
      <div className='app'>
        <Header/>

        <Route exact path='/' render={() => 
          <CardDisplay movies={this.state.movies} getMovieDetails={this.getMovieDetails}/>
        }/>

        <Route path='/movie/:id' render={({match}) => 
        <MovieDetails id={ match.params.id } goBackToHome={this.goBackToHome} />
        }/>
      </div>
    )
  }
}


export default App;
