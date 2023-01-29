import React, { useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  //I would have to make this as a state or something
  //then call the async function and boom! - That's it bois
  const [dummyMovies, setDummyMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDataApi = async () => {
    setLoading(true);
    try {
      const req = await Axios.get("https://swapi.dev/api/films");

      //a kind of new database
      const ndata = req.data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.created,
        };
      });

      setDummyMovies(ndata);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  //I should be able to watch movies from the
  //So you should learn something in here please --- basically we are calling some function in useEffect, suppose the function we are calling
  //is updated, then when everything will be re-rendering we would want useEffect to work again with new version of the function!!
  //Hence we put it as a dependency --- and keep the useCallback hook around our function so that it only updates when some property inside it updates
  //Otherwise it would have new function address everytime and it will make an infinite loop if you think about it

  // useEffect(() => {
  //   fetchDataApi();
  // }, [fetchDataApi]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchDataApi}>Fetch Movies</button>
      </section>
      <section>
        {!loading && dummyMovies.length === 0 && <p>No movies available</p>}
        {!loading && <MoviesList movies={dummyMovies} />}
        {loading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
