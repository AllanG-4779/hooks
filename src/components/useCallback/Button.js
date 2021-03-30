import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={() => props.change()}>
        Change {props.text}
      </button>
    </div>
  );
}

export default Button;
