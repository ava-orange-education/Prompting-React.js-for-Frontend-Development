export interface Expense {
  id: string
  amount: number
  category: string
  description: string
  date: string
}

export interface AppState {
  expenses: Expense[]
  budget: number
  addExpense: (expense: Omit<Expense, "id">) => void
  deleteExpense: (id: string) => void
  setBudget: (amount: number) => void
}
