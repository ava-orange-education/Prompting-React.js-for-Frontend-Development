import { useMemo } from "react"

function CategoryBreakdown() {
  const { expenses } = useApp()

  const data = useMemo(() => {
    const now = new Date()
    const monthlyExpenses = expenses.filter((e) => {
      const d = new Date(e.date)
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    })

    const byCategory = monthlyExpenses.reduce<Record<string, number>>((acc, e) => {
      acc[e.category] = (acc[e.category] || 0) + e.amount
      return acc
    }, {})

    return Object.entries(byCategory)
      .map(([name, amount]) => ({ name, amount: Number(amount.toFixed(2)) }))
      .sort((a, b) => b.amount - a.amount)
  }, [expenses])

  // ...rest of the component uses `data`
}
