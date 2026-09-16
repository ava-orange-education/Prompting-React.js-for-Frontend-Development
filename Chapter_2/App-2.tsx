import Button from "./Button";

const App = () => {
  return (
    <div>
      <h1>My First React Component</h1>
      <Button label="Get Started" onClick={() => alert("Hello from Button!")} />
    </div>
  );
};

export default App;
