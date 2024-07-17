import React from "react";

const Button = ({ functionClick, children }) => {
  return <button onClick={functionClick}>{children}</button>;
};

export default Button;
