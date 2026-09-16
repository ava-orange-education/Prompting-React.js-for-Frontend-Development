import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Expense, AppState } from "../types"

const AppContext = createContext<AppState | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : []
  })

  const [budget, setBudgetState] = useState<number>(() => {
    const saved = localStorage.getItem("budget")
    return saved ? Number(saved) : 2000
  })

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  useEffect(() => {
    localStorage.setItem("budget", String(budget))
  }, [budget])

  const addExpense = (data: Omit<Expense, "id">) => {
    const newExpense: Expense = {
      ...data,
      id: crypto.randomUUID(),
    }
    setExpenses((prev) => [newExpense, ...prev])
  }

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id))
  }

  const setBudget = (amount: number) => {
    setBudgetState(amount)
  }

  return (
    <AppContext.Provider
      value={{ expenses, budget, addExpense, deleteExpense, setBudget }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
