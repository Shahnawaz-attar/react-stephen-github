import React from "react";
import CardSearch from "./components/CardSearch";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarValue from "./components/CarValue";

const App = () => {
  return (
    <div>
      <CarForm />
      <CarList />
    </div>
  );
};

export default App;
