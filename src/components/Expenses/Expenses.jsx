import { useState } from 'react'

import ExpensesList from './ExpensesList'
import ExpenseFilter from '../Filter/ExpenseFilter'
import Card from '../UI/Card'

import './Expenses.css'

const Expenses = (props) => {
  const expenses = props.expenses
  const [filteredYear, setFilteredYear] = useState('2022')

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
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
