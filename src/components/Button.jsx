import Link from "next/link";
import React from "react";

const Button = (props) => {
  return (
    <Link
      href={props.href}
      className={`text-white text-sm bg-red-500 mx-2 px-6 py-3 rounded-lg flex flex-col items-center ${props.className}`}
    >
      <span className="font-medium">{props.text}</span>
    </Link>
  );
};

export default Button;
