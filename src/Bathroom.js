import React from "react";

function Bathroom(props) {
  return (
    <div className="bath" id={`bathroom-${props.size}`}>
      {props.size} Bathroom
    </div>
  );
}

export default Bathroom;
