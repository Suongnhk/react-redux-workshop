import { useState } from 'react'
import type { Expense } from './types/expense'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([])

  // TODO: add handleAddExpense and handleDeleteExpense
  function handleAddExpense(expense : Expense) {
    setExpenses([...expenses, expense])
  }

  function handleDeleteExpense(id: string) {
    setExpenses(expenses.filter(e => e.id !== id))
  }

  return (
    <div className="app-layout">
      <aside>
        <h1>Expense Manager</h1>
        <ExpenseForm onAdd={handleAddExpense} />
      </aside>
      <main>
        <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
      </main>
    </div>
  )
}

export default App
