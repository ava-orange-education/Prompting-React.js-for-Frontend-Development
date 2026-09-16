const prefix = new Date().toISOString().slice(0, 7) // "2026-08"
const monthlyExpenses = expenses.filter((e) => e.date.startsWith(prefix))
