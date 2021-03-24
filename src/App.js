import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import movieData from './TestData/movies-mock-data'
import Card from './Card/Card'
import CardDisplay from './CardDisplay/CardDisplay'


class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    this.setState({ movies: movieData })
  }


  render() {
    return (
      <>
        <h1>Rotten Taters</h1>
        <CardDisplay movies={this.state.movies}/>
      </>
    )
  }
}


export default App;
