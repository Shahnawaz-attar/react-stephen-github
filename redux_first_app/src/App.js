import React from "react";
import MoviePlayList from "./components/MoviePlayList";
import SongsPlaylist from "./components/SongsPlaylist";
import { useDispatch } from "react-redux";
import { reset } from "./store/actions";

const App = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      <button onClick={handleReset}>Reset</button>

      <SongsPlaylist />
      <MoviePlayList />
    </div>
  );
};

export default App;
