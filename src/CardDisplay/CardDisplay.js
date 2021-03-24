const CardDisplay = ( { movies } ) => {
  console.log(movies.movies[0].title)

  return (
    <h2>{movies.movies[0].title}</h2>
  )
}

export default CardDisplay