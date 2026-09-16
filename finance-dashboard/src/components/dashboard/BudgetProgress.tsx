import { useApp } from "../../context/AppContext"

function BudgetProgress() {
  const { expenses, budget } = useApp()
  const now = new Date()
  const monthlyTotal = expenses
    .filter((e) => {
      const d = new Date(e.date)
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    })
    .reduce((sum, e) => sum + e.amount, 0)

  const percentage = budget > 0 ? (monthlyTotal / budget) * 100 : 0
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  const dayOfMonth = now.getDate()
  const expectedPercentage = (dayOfMonth / daysInMonth) * 100

  const status =
    percentage > 90
      ? { label: "Over budget", color: "text-red-600", bg: "bg-red-50" }
      : percentage > expectedPercentage
      ? { label: "Ahead of pace", color: "text-yellow-600", bg: "bg-yellow-50" }
      : { label: "On track", color: "text-green-600", bg: "bg-green-50" }

  return (
    <div className={`rounded-xl p-6 shadow-sm border border-gray-100 ${status.bg}`}>
      <h2 className="text-sm font-medium text-gray-500 mb-2">Budget Status</h2>
      <div className={`text-2xl font-bold ${status.color}`}>{status.label}</div>
      <p className="text-sm text-gray-500 mt-1">
        {percentage.toFixed(0)}% spent with {daysInMonth - dayOfMonth} days remaining
      </p>
    </div>
  )
}

export default BudgetProgress
