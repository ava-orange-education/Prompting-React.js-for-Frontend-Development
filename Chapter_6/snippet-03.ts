const [expenses, setExpenses] = useState<Expense[]>(() => {
  try {
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
})
