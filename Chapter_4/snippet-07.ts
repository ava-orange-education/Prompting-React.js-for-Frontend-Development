// Potentially wrong - captures tasks as it was when the handler was created
const addTask = () => {
  setTasks([...tasks, newTask]);
};

// Safer - the functional form always reads the latest state
const addTask = () => {
  setTasks((prev) => [...prev, newTask]);
};
