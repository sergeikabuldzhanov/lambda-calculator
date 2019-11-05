import React from "react";

export const OperatorButton = (props) => {
  console.log(props);
  return (
    <div className = "operator button">
      {/* Display a button element rendering the data being passed down from the parent container on props */props.operator.char}
    </div>
  );
};
