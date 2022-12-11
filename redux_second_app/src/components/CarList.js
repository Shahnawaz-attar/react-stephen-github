import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
import CardSearch from "./CardSearch";
import CarValue from "./CarValue";

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form, cars: { cars, searchTerm } }) => {
    const filteredCars = cars.filter(car =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = car => {
    dispatch(removeCar(car.id));
  };

  const carList = cars.map(car => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div
        key={car.id}
        className="alert alert-secondary d-flex flex-row d-flex justify-content-between"
        role="alert"
      >
        <div className={`${bold && "fw-bold"}`}>
          <span>{car.name}</span> --
          <span> ${car.cost} </span>
        </div>
        <button
          onClick={() => {
            handleCarDelete(car);
          }}
          className="btn btn-sm btn-danger"
        >
          delete
        </button>
      </div>
    );
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card">
            <CardSearch />
            <div className="card-header">
              <h3> Card List</h3>
            </div>
            <div className="card-body">{carList}</div>
            <CarValue />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
