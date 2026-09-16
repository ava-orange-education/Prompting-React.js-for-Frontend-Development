import SpendingSummary from "../components/dashboard/SpendingSummary"
import CategoryBreakdown from "../components/dashboard/CategoryBreakdown"
import BudgetProgress from "../components/dashboard/BudgetProgress"

function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SpendingSummary />
        <BudgetProgress />
      </div>
      <CategoryBreakdown />
    </div>
  )
}

export default DashboardPage
