# Finance Dashboard — Companion Code

This is the runnable **companion repository** for the book **_Prompt to React.js_**
(publisher project code 512). It implements the **personal finance dashboard**
built step by step in **Chapter 5, "Building a Real-World Mini Project"**, and
extended in later chapters.

The app lets a user:

- Add and delete expenses (amount, category, description, date)
- See a **Dashboard** with monthly spending, a budget-status indicator, and a
  Recharts bar chart of spending by category
- Manage a **monthly budget** and view simple statistics on a **Settings** page

Data is persisted in the browser via `localStorage`, ids are generated with
`crypto.randomUUID()`, and navigation between the three pages uses
`BrowserRouter` from React Router — exactly as described in the book.

## Tech stack

- React 19 + TypeScript (functional components and hooks)
- Vite (dev server and build)
- React Router (`react-router-dom`) for routing
- Recharts for the category chart
- Tailwind CSS v4 (via `@tailwindcss/vite`) for styling

## Project structure

```
src/
  components/
    layout/       Header.tsx, Layout.tsx
    expenses/     ExpenseForm.tsx, ExpenseList.tsx
    dashboard/    SpendingSummary.tsx, CategoryBreakdown.tsx, BudgetProgress.tsx
  pages/          DashboardPage.tsx, ExpensesPage.tsx, SettingsPage.tsx
  context/        AppContext.tsx   (shared expenses + budget state)
  data/           categories.ts
  types/          index.ts         (Expense, AppState)
  App.tsx         routes + providers
  main.tsx        entry point
```

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically http://localhost:5173).

## Build

```bash
npm run build      # type-checks with tsc and produces a production build in dist/
npm run preview    # serve the production build locally
```

## Which chapter this maps to

The complete component set comes from **Chapter 5**. Related chapters build on
the same project:

- **Chapter 3** — Vite + Tailwind CSS v4 setup used here.
- **Chapter 6** — error handling, `useMemo`, a `useMonthlyExpenses` hook, and tests.
- **Chapter 7** — accessibility improvements, an `ErrorBoundary`, and deployment.

Individual per-chapter code snippets extracted from the book live alongside this
project in `../Chapter-01` … `../Chapter-08`.
