export const movieCall = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
        .then((res) => {
        if(!res.ok) {
            throw Error('Can not find movies on our end! Refresh and try again.')
        }
        return res.json() 
        })
        
} 

export const getMovieDetails = (movieId) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
        .then((res) => {
        if(!res.ok) {
            throw Error('Can not find that movie on our end! Refresh and try again.')
        }
        return res.json()
        })
  }
