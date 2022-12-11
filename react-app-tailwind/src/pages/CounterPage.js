import React from "react";
import { useEffect, useState } from "react";
import Button from "../components/Buttons";
const CounterPage = ({ initalValue }) => {
  const [count, setCount] = useState(initalValue);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      count is {count}
      <Button onClick={handleClick} primary>
        {" "}
        click{" "}
      </Button>
    </div>
  );
};

export default CounterPage;
