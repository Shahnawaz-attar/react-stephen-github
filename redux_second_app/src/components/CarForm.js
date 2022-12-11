import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store/index";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return state.form;
  });
  const handleChange = (e) => {
    if (e.target.name === "carName") {
      dispatch(changeName(e.target.value));
    } else {
      dispatch(changeCost(parseInt(e.target.value) || 0));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card">
            <div className="card-header">
              <h3>Add Card</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Car Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter car name"
                    value={name}
                    onChange={handleChange}
                    name="carName"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Car Cost
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter car cost"
                    value={cost || ""}
                    onChange={handleChange}
                    name="carCost"
                  />
                </div>
                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarForm;
