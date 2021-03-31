import React, { useMemo, useState } from "react";
//use memo is used when there is a function that take alot of time 
//and rerendering is done only when required for example call to an api
//Or when there is need for solving refrential equality.

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const slow = useMemo(() => {
   return slowFunction(number);
  }, [number]);
  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div>
      <input onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(!dark)}>Toggle theme </button>
      <div>
        <p style={theme}>{slow}</p>
      </div>
    </div>
  );
}
const slowFunction = (num) => {
  for (var i = 1; i <= 100000000; i++) {}
  return (num = num * 2);
};

export default UseMemo;
