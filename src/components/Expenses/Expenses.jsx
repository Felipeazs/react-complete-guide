import { useState } from 'react'

import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import ExpenseFilter from '../Filter/ExpenseFilter'
import Card from '../UI/Card'

import './Expenses.css'

const Expenses = (props) => {
  const expenses = props.expenses
  const [filteredYear, setFilteredYear] = useState('2021')

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear) //comunicación hijo-padre
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectedYear={selectedYearHandler}
        default={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
