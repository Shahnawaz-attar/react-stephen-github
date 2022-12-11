import React from "react";
import { useState, useRef, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const devElem = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (label) => {
    setIsOpen(false);
    onChange(label);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!devElem.current) {
        return;
      }
      if (!devElem.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const renderDropDown = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-3"
        onClick={() => {
          handleOptionClick(option);
        }}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={devElem} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value || "select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderDropDown}</Panel>}
    </div>
  );
};

export default DropDown;
