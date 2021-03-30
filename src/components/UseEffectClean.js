import React, { useEffect, useState } from "react";

function UseEffectClean() {
  //this is useEffect hook with clean up aka componentwillunmount
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const changelog = (e) => {
    console.log("Event fired");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("Component Visible");
    window.addEventListener("mousemove", changelog);
    return ()=>{
      console.log("Component will be unmounted")
      window.removeEventListener("mousemove",changelog)
    }

  }, []);
  return (
    <div>
      <p>
        X - {x} Y - {y}
      </p>
    </div>
  );
}

export default UseEffectClean;
