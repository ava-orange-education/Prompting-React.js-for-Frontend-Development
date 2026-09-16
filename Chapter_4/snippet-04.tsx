// Wrong - no key
{tasks.map((task) => <li>{task.text}</li>)}

// Correct - a stable, unique key
{tasks.map((task) => <li key={task.id}>{task.text}</li>)}
