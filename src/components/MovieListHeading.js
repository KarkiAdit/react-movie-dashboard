import React from "react";

const MovieListHeading = (props) => {
  const favComponent = props.favComponent;
  return (
    <div className="col">
      <h1>{props.heading}</h1>
      <favComponent />
    </div>
  );
};

export default MovieListHeading;
