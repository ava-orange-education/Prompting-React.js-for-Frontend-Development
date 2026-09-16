import { useMemo } from "react"
import { useApp } from "../context/AppContext"
import { Expense } from "../types"

export function useMonthlyExpenses(): Expense[] {
  const { expenses } = useApp()

  return useMemo(() => {
    const now = new Date()
    return expenses.filter((e) => {
      const d = new Date(e.date)
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    })
  }, [expenses])
}
