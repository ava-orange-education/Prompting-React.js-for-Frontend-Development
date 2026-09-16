// App.tsx
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => { /* ... */ };
  const toggleTask = (id: number) => { /* ... */ };
  const deleteTask = (id: number) => { /* ... */ };

  return (
    <div>
      <TaskForm input={input} setInput={setInput} onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}
