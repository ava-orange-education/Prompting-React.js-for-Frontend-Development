const addTask = () => {
  if (input.trim() === "") return
  const newTask: Task = {
    id: crypto.randomUUID(),
    text: input.trim(),
    completed: false,
    category: selectedCategory,
  }
  setTasks([...tasks, newTask])
  setInput("")
}
