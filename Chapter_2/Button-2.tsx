import { FC } from "react";

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return <button onClick={() => console.log(label)}>{label}</button>;
};

export default Button;
