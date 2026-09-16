import { FC } from "react";

interface AppProps {
  message: string;
}

const App: FC<AppProps> = ({ message }) => {
  return <h1>{message}</h1>;
};

export default App;
