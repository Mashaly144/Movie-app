import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./componant/MovieCard";
//ef368af2
const API_URL = "http://www.omdbapi.com?apikey=ef368af2";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&s=${tittle}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <img
          src={searchIcon}
          alt="img"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>no movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
