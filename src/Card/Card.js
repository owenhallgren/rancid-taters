const Card = ({ title, posterPath, averageRating, releaseDate }) => {
return (
    <>
      <p>{title}</p>
      <p>{posterPath}</p>
      <p>{averageRating}</p>
      <p>{releaseDate}</p>
    </>
)
}

export default Card