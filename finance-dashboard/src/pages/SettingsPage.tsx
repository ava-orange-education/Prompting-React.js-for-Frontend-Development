import { useState } from "react"
import { useApp } from "../context/AppContext"

function SettingsPage() {
  const { budget, setBudget, expenses } = useApp()
  const [budgetInput, setBudgetInput] = useState(String(budget))
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    const value = parseFloat(budgetInput)
    if (isNaN(value) || value <= 0) return
    setBudget(value)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const totalAllTime = expenses.reduce((sum, e) => sum + e.amount, 0)

  return (
    <div className="max-w-lg space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly Budget</h2>
        <div className="flex gap-3">
          <input
            type="number"
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Save
          </button>
        </div>
        {saved && (
          <p className="text-sm text-green-600 mt-2">Budget updated!</p>
        )}
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Stats</h2>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-800">{expenses.length}</div>
            <div className="text-sm text-gray-500">Total Expenses</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800">${totalAllTime.toFixed(2)}</div>
            <div className="text-sm text-gray-500">All-Time Spending</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
