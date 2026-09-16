import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, beforeEach } from "vitest"
import ExpenseForm from "./ExpenseForm"

// Mock the useApp hook
const mockAddExpense = vi.fn()
vi.mock("../../context/AppContext", () => ({
  useApp: () => ({
    addExpense: mockAddExpense,
  }),
}))

describe("ExpenseForm", () => {
  beforeEach(() => {
    mockAddExpense.mockClear()
  })

  it("renders all form fields", () => {
    render(<ExpenseForm />)
    expect(screen.getByPlaceholderText("0.00")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("What did you spend on?")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /add expense/i })).toBeInTheDocument()
  })

  it("calls addExpense with correct data on valid submission", async () => {
    const user = userEvent.setup()
    render(<ExpenseForm />)
    await user.type(screen.getByPlaceholderText("0.00"), "42.50")
    await user.type(screen.getByPlaceholderText("What did you spend on?"), "Lunch")
    await user.click(screen.getByRole("button", { name: /add expense/i }))
    expect(mockAddExpense).toHaveBeenCalledTimes(1)
    expect(mockAddExpense).toHaveBeenCalledWith(
      expect.objectContaining({
        amount: 42.5,
        description: "Lunch",
        category: "Housing",
      })
    )
  })

  it("does not call addExpense when amount is empty", async () => {
    const user = userEvent.setup()
    render(<ExpenseForm />)
    await user.type(screen.getByPlaceholderText("What did you spend on?"), "Lunch")
    await user.click(screen.getByRole("button", { name: /add expense/i }))
    expect(mockAddExpense).not.toHaveBeenCalled()
  })

  it("resets form fields after successful submission", async () => {
    const user = userEvent.setup()
    render(<ExpenseForm />)
    const amountInput = screen.getByPlaceholderText("0.00")
    const descInput = screen.getByPlaceholderText("What did you spend on?")
    await user.type(amountInput, "25")
    await user.type(descInput, "Coffee")
    await user.click(screen.getByRole("button", { name: /add expense/i }))
    expect(amountInput).toHaveValue(null)
    expect(descInput).toHaveValue("")
  })
})
