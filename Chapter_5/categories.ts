export const categories = [
  "Housing",
  "Food",
  "Transport",
  "Entertainment",
  "Shopping",
  "Health",
  "Utilities",
  "Other",
] as const

export type Category = (typeof categories)[number]
