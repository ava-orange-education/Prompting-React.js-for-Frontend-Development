// Wrong - mutates the existing array
tasks.push(newTask);
setTasks(tasks);

// Correct - creates a new array
setTasks([...tasks, newTask]);
