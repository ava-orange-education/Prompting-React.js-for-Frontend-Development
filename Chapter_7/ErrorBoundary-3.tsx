import { ErrorBoundary } from "react-error-boundary";

function Fallback() {
  return (
    <div className="p-6 bg-red-50 rounded-xl text-center">
      <p className="text-red-600 font-medium">Something went wrong.</p>
    </div>
  );
}

<ErrorBoundary FallbackComponent={Fallback}>
  <SpendingSummary />
</ErrorBoundary>
