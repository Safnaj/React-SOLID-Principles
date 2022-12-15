import React from "react";
import "../Style.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  // role?: "back" | "forward" | "main" | "not-found";
  icon?: React.ReactNode;
}

const Button = (props: IButtonProps) => {
  const { text, icon } = props;

  return (
    <button className='button' {...props}>
      {text}
      <div className='m-2'>{icon}</div>
    </button>
  );
};

export default Button;
