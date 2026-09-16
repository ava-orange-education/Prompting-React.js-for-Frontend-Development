import { useState, useRef } from "react";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addTask = () => {
    if (input.trim() === "") return;
    const newTask: Task = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
      category: selectedCategory,
    };
    setTasks([...tasks, newTask]);
    setInput("");
    inputRef.current?.focus();
  };

  // ...rest of the component
}
