// Wrong - calls deleteTask immediately during render
<button onClick={deleteTask(task.id)}>Delete</button>

// Correct - passes a function that runs when clicked
<button onClick={() => deleteTask(task.id)}>Delete</button>
