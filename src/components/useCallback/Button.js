import React from "react";

function Button(props) {
    console.log("button render"+props.text)
  return (
    <div>
      <button onClick={() => props.change()}>
        Change {props.text}
      </button>
    </div>
  );
}

export default Button;
