// @ts-nocheck
import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "reset":
      return { firstCounter: initialState.firstCounter };
  }
};

function MultipleReducers() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>CounterOne {count.firstCounter}</h2>

      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <h2>Counter Two ->  {count2.firstCounter}</h2>
      <button onClick={() => dispatch2({ type: "increment",value:10})}>Increment 5</button>
      <button onClick={() => dispatch2({ type: "decrement",value: 10})}>Decrement 5</button>
      <button onClick={() => dispatch2({ type: "reset" })}>Reset</button>
    </div>
    
  );
}

export default MultipleReducers;
