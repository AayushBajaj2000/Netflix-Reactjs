import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState({});
  const base_url = "https://image.tmdb.org/t/p/original/";

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }

  //code which runs at the render
  useEffect(() => {
    //Async function for getting the movies
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //   const selectRandom = () => {
  //     const length = movies.length;
  //     //Choosing a random movie from the given movies
  //     const randomIndex = Math.floor(Math.random() * length);
  //     setMovie(movies[randomIndex]);
  //   };

  return (
    <header
      className="banner"
      style={{ backgroundImage: `url(${base_url}${movie?.backdrop_path})` }}
    >
      <div className="banner__contents">
        {/* title  */}
        <p className="banner__heading">
          {movie?.title || movie?.name || movie?.original_name}
        </p>
        {/* buttons  */}
        <div className="banner__buttons">
          <button className="banner__button" type="button">
            Play
          </button>
          <button className="banner__button" type="button">
            My list
          </button>
        </div>
        {/* Explanation */}
        <p className="banner__text">{truncate(movie.overview, 150)}</p>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
