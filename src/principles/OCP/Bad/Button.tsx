import React from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import "../Style.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  role?: "back" | "forward" | "main" | "not-found";
  /* Above role can be extended further as the conditions increase.
   So it's a bad practice to have multiple conditions in a single component. */
}

const Button = (props: IButtonProps) => {
  const { text, role } = props;

  return (
    <button className='button' {...props}>
      {text}
      <div className='m-2'>
        {role === "forward" && <HiOutlineArrowNarrowRight />}
        {role === "back" && <HiOutlineArrowNarrowLeft />}
      </div>
    </button>
  );
};

export default Button;
