import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { songReducer, addSong, removeSong } from "./slices/songSlice";

const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: moviesReducer,
  },
});

export { store, addMovie, removeMovie, addSong, removeSong };
