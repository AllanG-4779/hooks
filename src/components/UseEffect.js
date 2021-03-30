import React, { useEffect, useState } from "react";

function UseEffect() {
  const [age, setAge] = useState(0);
  useEffect(() => {
    document.title = ` I am ${age} years old`;
    console.log("rendered");
  },[]);
  return (
    <div>
      <button onClick={() => setAge((prev) => prev + 1)}>Increment age</button>
    </div>
  );
}

export default UseEffect;
