type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
};

const Button = ({ label, variant = "primary" }: ButtonProps) => {
  return <button className={variant}>{label}</button>;
};
