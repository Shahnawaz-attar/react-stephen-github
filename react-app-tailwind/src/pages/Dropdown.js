import React, { useState } from "react";
import DropDown from "../components/DropDown";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState();

  const handleSelectOption = (option) => {
    setSelectedOption(option.label);
  };

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Yellow",
      value: "yelow",
    },
  ];
  return (
    <div>
      <DropDown
        options={options}
        value={selectedOption}
        onChange={handleSelectOption}
      />
    </div>
  );
};

export default Dropdown;
