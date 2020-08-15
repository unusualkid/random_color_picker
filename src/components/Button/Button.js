import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.light ? "light-button" : "dark-button"}
      onClick={props.onClick}
    >
      Refresh
    </button>
  );
};

export default Button;
