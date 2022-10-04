import React from "react";

const MovieList = (props) => {
  const Favourite = props.favComponent;
  return (
    <>
      {props.movies.map((movie, idx) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie"></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <Favourite />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
