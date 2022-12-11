import React, { useReducer } from "react";
import Button from "../components/Buttons";
import produce from "immer";

const reducer = (state, action) => {
  // without immer
  //   switch (action.type) {
  //     case "increment-count":
  //       return {
  //         ...state,
  //         count: state.count + action.payload,
  //       };
  //     case "decrement-count":
  //       return {
  //         ...state,
  //         count: state.count - action.payload,
  //       };
  //     case "setValueToAdd":
  //       return {
  //         ...state,
  //         valueToadd: action.payload,
  //       };
  //     case "submit_form":
  //       return {
  //         ...state,
  //         count: state.count + state.valueToadd,
  //         valueToadd: 0,
  //       };
  //     default:
  //       return state;
  //   }

  // with immer
  switch (action.type) {
    case "increment-count":
      state.count = state.count + action.payload;
      return;
    case "decrement-count":
      state.count = state.count - action.payload;
      return;
    case "setValueToAdd":
      state.valueToadd = action.payload;
      return;
    case "submit_form":
      state.count = state.count + state.valueToadd;
      state.valueToadd = 0;
      return;
    default:
      return;
  }
};

const UseReducerExample = ({ initalValue }) => {
  // without immer
  //   const [state, dispatch] = useReducer(reducer, {
  //     count: initalValue,
  //     valueToadd: 0,
  //   });

  // with immer
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initalValue,
    valueToadd: 0,
  });

  const handleincrement = () => {
    dispatch({
      type: "increment-count",
      payload: 1,
    });
  };
  const handledecrement = () => {
    dispatch({
      type: "decrement-count",
      payload: 1,
    });
  };

  const handleChange = (e) => {
    dispatch({
      type: "setValueToAdd",
      payload: parseInt(e.target.value) || 0,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "submit_form",
    });
  };

  return (
    <div className="p-3 border-b mt-3">
      Count is : {state.count}
      <div className="flex flex-row">
        <Button primary outline className="m-2" onClick={handleincrement}>
          Increament
        </Button>
        <Button primary outline className="m-2" onClick={handledecrement}>
          decrement
        </Button>
      </div>
      <form className="form mt-2" onSubmit={handleSubmit}>
        <input
          type={"number"}
          className="border border-gray-100 p-2"
          onChange={handleChange}
          value={state.valueToadd || ""}
        />
        <Button outline primary className="mt-2">
          Add
        </Button>
      </form>
    </div>
  );
};

export default UseReducerExample;
