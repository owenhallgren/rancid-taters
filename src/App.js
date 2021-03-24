import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import movieData from './TestData/movies-mock-data'


class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: []
    }
  }




  render() {
    return (
      <>
        <h1>Rotten Taters</h1>
      </>
    )
  }
}


export default App;
