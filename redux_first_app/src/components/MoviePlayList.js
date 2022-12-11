import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store";

const MoviePlayList = () => {
  const [moviesList, setMoviesList] = useState([]);
  const dispatch = useDispatch();
  const movies = useSelector((state) => {
    return state.movies;
  });

  useEffect(() => {
    setMoviesList(movies);
  }, [movies]);

  const handleRemoveMovie = (movie) => {
    dispatch(removeMovie(movie));
  };

  const constMoviesLists = moviesList.map((item) => {
    return (
      <div key={item}>
        {item}
        <span
          style={{ marginLeft: "100px" }}
          onClick={() => {
            handleRemoveMovie(item);
          }}
        >
          X
        </span>
      </div>
    );
  });

  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie + "_" + Math.round(Math.random() * 999)));
  };

  return (
    <div>
      <button
        onClick={() => {
          handleMovieAdd("my_film");
        }}
      >
        Add Movie
      </button>
      <h1>MovieList List</h1>
      {constMoviesLists}
    </div>
  );
};

export default MoviePlayList;
