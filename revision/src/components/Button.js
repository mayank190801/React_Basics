import axios from "axios";

const Button = ({ addMoviesHandler }) => {
  //while I am getting data, I can try to make things happens on my own choice as well
  //If you think about it brother!!! (think think)
  const getMovies = async () => {
    //get data from here, and call that function, simple as that
    try {
      const response = await axios.get("https://swapi.dev/api/films");
      addMoviesHandler(response.data.results);
      //   console.log(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return <button onClick={getMovies}>Fetch Movies</button>;
};

export default Button;
