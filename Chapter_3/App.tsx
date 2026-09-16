import { useState } from "react"

interface Task {
  id: string
  text: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState("")

  const addTask = () => {
    if (input.trim() === "") return
    const newTask: Task = {
      id: crypto.randomUUID(),
      text: input.trim(),
      completed: false,
    }
    setTasks([...tasks, newTask])
    setInput("")
  }

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Task Tracker</h1>
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Add a new task..."
          style={{ flex: 1, padding: "8px", fontSize: "16px" }}
        />
        <button onClick={addTask} style={{ padding: "8px 16px", fontSize: "16px" }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#999" : "#000",
                cursor: "pointer",
                flex: 1,
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                background: "none",
                border: "none",
                color: "#e74c3c",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && (
        <p style={{ color: "#999", textAlign: "center" }}>No tasks yet. Add one above!</p>
      )}
    </div>
  )
}

export default App
