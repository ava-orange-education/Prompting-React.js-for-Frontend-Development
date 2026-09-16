// In DashboardPage.tsx
import ErrorBoundary from "../components/ErrorBoundary";

function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ErrorBoundary>
          <SpendingSummary />
        </ErrorBoundary>
        <ErrorBoundary>
          <BudgetProgress />
        </ErrorBoundary>
      </div>
      <ErrorBoundary>
        <CategoryBreakdown />
      </ErrorBoundary>
    </div>
  );
}
