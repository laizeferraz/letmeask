import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className="button" {...props}></button>
    </div>
  );
};
