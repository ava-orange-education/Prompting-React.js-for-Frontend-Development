import { useMonthlyExpenses } from "../../hooks/useMonthlyExpenses"
import { useApp } from "../../context/AppContext"

function SpendingSummary() {
  const { budget } = useApp()
  const monthlyExpenses = useMonthlyExpenses()
  const totalSpent = monthlyExpenses.reduce((sum, e) => sum + e.amount, 0)
  // ...rest stays the same
}
