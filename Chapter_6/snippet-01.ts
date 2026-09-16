const [error, setError] = useState<string | null>(null)

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  const parsedAmount = parseFloat(amount)

  if (!amount || isNaN(parsedAmount) || parsedAmount <= 0) {
    setError("Please enter an amount greater than zero.")
    return
  }
  if (!description.trim()) {
    setError("Please enter a description.")
    return
  }

  setError(null)
  addExpense({
    amount: parsedAmount,
    category,
    description: description.trim(),
    date,
  })
  // ...reset form
}
