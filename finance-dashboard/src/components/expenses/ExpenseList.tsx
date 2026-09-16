import { useApp } from "../../context/AppContext"

function ExpenseList() {
  const { expenses, deleteExpense } = useApp()
  const sorted = [...expenses].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  if (sorted.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        No expenses yet. Add one above!
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {sorted.map((expense) => (
        <div
          key={expense.id}
          className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 group hover:border-gray-200 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-800">
                ${expense.amount.toFixed(2)}
              </div>
              <div className="text-xs text-gray-400">{expense.date}</div>
            </div>
            <div>
              <div className="text-sm text-gray-700">{expense.description}</div>
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                {expense.category}
              </span>
            </div>
          </div>
          <button
            onClick={() => deleteExpense(expense.id)}
            className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity text-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default ExpenseList
