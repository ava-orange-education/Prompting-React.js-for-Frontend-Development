import ExpenseForm from "../components/expenses/ExpenseForm"
import ExpenseList from "../components/expenses/ExpenseList"

function ExpensesPage() {
  return (
    <div className="space-y-6">
      <ExpenseForm />
      <ExpenseList />
    </div>
  )
}

export default ExpensesPage
