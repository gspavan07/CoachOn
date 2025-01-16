import React from "react";

const Button = (props) => {
  return (
    <a
      href="#login"
      className={`text-white text-sm bg-red-500 mx-2 px-6 py-3 rounded-lg flex flex-col items-center ${props.className}`}
    >
      <span className="font-medium">{props.text}</span>
    </a>
  );
};

export default Button;
