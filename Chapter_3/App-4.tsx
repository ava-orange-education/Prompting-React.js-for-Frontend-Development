import { useState } from "react"

interface Task {
  id: string
  text: string
  completed: boolean
  category: string
}

function App() {
  const categories = ["Work", "Personal", "Shopping", "Health", "Other"]
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Personal")
  const [filterCategory, setFilterCategory] = useState("All")

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

  const filteredTasks =
    filterCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === filterCategory)

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Task Tracker</h1>
        {/* Add Task Form */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button
            onClick={addTask}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </div>
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filterCategory === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Task List */}
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors"
            >
              <div
                className="flex items-center gap-3 flex-1 cursor-pointer"
                onClick={() => toggleTask(task.id)}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    task.completed
                      ? "bg-green-500 border-green-500"
                      : "border-gray-300"
                  }`}
                >
                  {task.completed && (
                    <span className="text-white text-xs">&#10003;</span>
                  )}
                </div>
                <span
                  className={`transition-all ${
                    task.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {task.text}
                </span>
                <span className="text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
                  {task.category}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity text-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {/* Empty State */}
        {filteredTasks.length === 0 && (
          <p className="text-center text-gray-400 py-8">
            {tasks.length === 0
              ? "No tasks yet. Add one above!"
              : "No tasks in this category."}
          </p>
        )}
        {/* Task Count */}
        {tasks.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-400 flex justify-between">
            <span>{tasks.filter((t) => !t.completed).length} remaining</span>
            <span>{tasks.filter((t) => t.completed).length} completed</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
