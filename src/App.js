import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList"
import { useEffect } from "react";


function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue]

const getMovieRequest = async () =>{
  const url = "http://www.omdbapi.com/?s=avengers&apikey=85f29b73"
  const response = await fetch(url);  
  const responseJSON = await response.json()
  console.log(responseJSON)
  setMovies(responseJSON.Search)
}

useEffect(()=> {
  getMovieRequest();
}, [])

  return (
    <div className="container-fluid movie-app">
      <div className="row"><MovieList movies={movies}/></div>
    </div>
  );
}

export default App;
