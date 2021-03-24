const CardDisplay = ( { movies } ) => {

  return (
    <p>{movies && movies.movies.map(movie => {
      return movie.title
    })}</p>
  )
}

export default CardDisplay