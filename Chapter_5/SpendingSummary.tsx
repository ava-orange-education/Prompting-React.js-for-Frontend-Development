import { useApp } from "../../context/AppContext"

function SpendingSummary() {
  const { expenses, budget } = useApp()
  const now = new Date()
  const monthlyExpenses = expenses.filter((e) => {
    const d = new Date(e.date)
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
  })
  const totalSpent = monthlyExpenses.reduce((sum, e) => sum + e.amount, 0)
  const remaining = budget - totalSpent
  const percentage = Math.min((totalSpent / budget) * 100, 100)

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-sm font-medium text-gray-500 mb-1">This Month</h2>
      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="text-3xl font-bold text-gray-800">${totalSpent.toFixed(2)}</span>
          <span className="text-sm text-gray-400 ml-2">of ${budget.toFixed(2)}</span>
        </div>
        <span className={`text-sm font-medium ${remaining >= 0 ? "text-green-600" : "text-red-600"}`}>
          {remaining >= 0 ? `$${remaining.toFixed(2)} left` : `$${Math.abs(remaining).toFixed(2)} over`}
        </span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all ${
            percentage > 90 ? "bg-red-500" : percentage > 75 ? "bg-yellow-500" : "bg-green-500"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default SpendingSummary
