import React, { useRef, useState } from "react";

function UseRef() {
  const [name, setName] = useState("");
  const input = useRef(0)
 

  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        <h2>My name is {name}</h2>
        <input ref={input}/>
      </div>
    </div>
  );
}

export default UseRef;
