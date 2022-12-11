import { configureStore } from "@reduxjs/toolkit";
import { changeCost, changeName, formReducer } from "./slices/searchSlice";
import {
  changeSearchTerm,
  addCar,
  removeCar,
  carsReducer,
} from "./slices/formSlice.js";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeCost, changeName, changeSearchTerm, addCar, removeCar };
