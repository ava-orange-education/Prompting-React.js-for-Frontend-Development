// Wrong - unnecessary state for a value you can compute
const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
useEffect(() => {
  setFilteredTasks(tasks.filter((t) => t.category === filter));
}, [tasks, filter]);

// Correct - simply compute it during render
const filteredTasks = tasks.filter((t) => t.category === filter);
