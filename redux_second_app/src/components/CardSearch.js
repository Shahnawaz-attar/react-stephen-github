import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/index";

const CardSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => {
    return state.cars.searchTerm;
  });

  const handlechange = e => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <form className="row m-2">
      <div className="col-lg-4 mx-right ">
        <input
          type="text"
          onChange={handlechange}
          value={searchTerm}
          className="form-control"
          placeholder="Search car"
        />
      </div>
      <div className="col-lg-2 mx-right">
        <button type="submit" className="btn btn-primary mb-3">
          Search
        </button>
      </div>
    </form>
  );
};

export default CardSearch;
