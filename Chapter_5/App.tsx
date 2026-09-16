import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import Layout from "./components/layout/Layout"
import DashboardPage from "./pages/DashboardPage"
import ExpensesPage from "./pages/ExpensesPage"
import SettingsPage from "./pages/SettingsPage"

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
