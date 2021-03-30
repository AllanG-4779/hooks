import React, { useContext } from "react";
import { countContext } from "../../../App";

function ComponentA() {
  const counter = useContext(countContext);

  return (
    <div>
      <button
        onClick={() => counter.countDispatch({ type: "decrement", value: 4 })}
      >
        From A Decrement
      </button>
      <button
        onClick={() => counter.countDispatch({ type: "increment",value:98 })}
      >
        Increment Component A
      </button>
    </div>
  );
}

export default ComponentA;
