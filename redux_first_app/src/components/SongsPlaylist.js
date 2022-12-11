import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../store";

const SongsPlaylist = () => {
  const [songsList, setSongsList] = useState([]);
  const dispatch = useDispatch();
  const songs = useSelector((state) => {
    return state.songs;
  });

  useEffect(() => {
    setSongsList(songs);
  }, [songs]);

  const handleRemoveSong = (song) => {
    dispatch(removeSong(song));
  };

  const constSongsLists = songsList.map((item) => {
    return (
      <div key={item}>
        {item}
        <span
          style={{ marginLeft: "100px" }}
          onClick={() => {
            handleRemoveSong(item);
          }}
        >
          X
        </span>
      </div>
    );
  });

  const handleSongAdd = (song) => {
    dispatch(addSong(song + "_" + Math.round(Math.random() * 999)));
  };

  return (
    <div>
      <button
        onClick={() => {
          handleSongAdd("nice dsf");
        }}
      >
        Add song
      </button>
      <h1>Songs List</h1>
      {constSongsLists}
    </div>
  );
};

export default SongsPlaylist;
