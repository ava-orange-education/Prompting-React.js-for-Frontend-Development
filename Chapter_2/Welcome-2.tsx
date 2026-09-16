type WelcomeProps = {
  name: string;
};

const Welcome = ({ name }: WelcomeProps) => {
  return <h2>Hello {name}</h2>;
};
