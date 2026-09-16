const filteredTasks =
  filterCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === filterCategory)
