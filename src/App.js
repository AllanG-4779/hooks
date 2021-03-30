import React, { useReducer, useState } from "react";
import "./App.css";

import Context1Review from "./components/Context/Context1Review";
import Counter from "./components/UserReducer/counter";
import Counter2 from "./components/UserReducer/Counter2";
import FetchRevisit from "./components/UserReducer/FetchRevisit";
import MultipleReducers from "./components/UserReducer/MultipleReducers";
import ComponentA from "./components/UserReducer/UseReducer_UseContext/ComponentA";
import ComponentB from "./components/UserReducer/UseReducer_UseContext/ComponentB";
import ComponentC from "./components/UserReducer/UseReducer_UseContext/ComponentC";
import UserReducerFetch from "./components/UserReducer/UserReducerFetch";
// import ComponentB from "./components/Context/ComponentB";
// import FetchData2 from "./components/FetchData2";
// import IntervalTimer from "./components/IntervalTimer";
// import LifeCycle from "./components/LifeCycle";
// import UseEffectClean from "./components/UseEffectClean";
// export const parentContext = React.createContext("App");
const initialState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":

      console.log(typeof(action.value))
      return { counter: state.counter +action.value};

    case "decrement":
      return { counter: state.counter - action.value };
  }
};
export const countContext = React.createContext(initialState)
function App() {
  // const [render, toggleRender] = useState(true);
 const  [count, dispatch] = useReducer(reducer,initialState)
  return (
    <div className="App">
      {/* {render && <UseEffectClean />} */}

      {/* <button onClick={() => toggleRender(!render)}>Mount toggle</button>
      <parentContext.Provider value="Hello from App">
        <ComponentA />
      </parentContext.Provider> */}
      {/* <MultipleReducers/> */}
      {/* <p>{count.counter}</p>
      <countContext.Provider value = {{count:count, countDispatch: dispatch}}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </countContext.Provider> */}
      {/* <FetchRevisit/> */}
      {/* <UserReducerFetch/> */}
      
    </div>
  );
}

export default App;
