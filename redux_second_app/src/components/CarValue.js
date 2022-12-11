import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { cars, searchTerm } }) =>
    cars
      .filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((acc, car) => (acc += car.cost), 0)
  );

  return <div className="p-3">Toatal Car Cost: ${totalCost} </div>;
};

export default CarValue;
