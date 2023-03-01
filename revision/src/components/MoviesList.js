//the basic functionality kind of works for sure
//now looking into more detail should help us further

const MoviesList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => {
        return <div>{movie.title}</div>;
      })}
    </div>
  );
};

export default MoviesList;
