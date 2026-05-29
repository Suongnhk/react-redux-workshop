import { CATEGORIES } from '../constants'
import type { Expense } from '../types/expense'

function ExpenseForm({ onAdd }: { onAdd: (expense: Expense) => void }) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: create a new expense and add it to the list

    const form = e.target as HTMLFormElement
    const description = (form.elements.namedItem('description') as HTMLInputElement).value
    const amount = parseFloat((form.elements.namedItem('amount') as HTMLInputElement).value)
    const category = (form.elements.namedItem('category') as HTMLSelectElement).value

    const newExpense: Expense = {
      id: crypto.randomUUID(),
      description,
      amount,
      category,
      date: new Date().toLocaleDateString(),
    }

    onAdd(newExpense)

    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add Expense</h2>
      <label>
        Name
        <input
          name="description"
          placeholder="e.g. Lunch"
          required
        />
      </label>
      <label>
        Amount ($)
        <input
          name="amount"
          type="number"
          placeholder="0.00"
          min={0}
          step="0.01"
          required
        />
      </label>
      <label>
        Category
        <select name="category" required>
          <option value="">Select category</option>
          {CATEGORIES.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>
      <button type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm
