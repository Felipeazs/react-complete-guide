import { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import ExpenseFilter from '../Filter/ExpenseFilter'
import Card from '../UI/Card'

import './Expenses.css'

const Expenses = (props) => {
  const expenses = props.expenses
  const [filteredYear, setFilteredYear] = useState('2020')

  const selectedYearHandler = (selectedYear) => {
    console.log(selectedYear)
    setFilteredYear(selectedYear) //comunicación hijo-padre
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectedYear={selectedYearHandler}
        default={filteredYear}
      />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        )
      })}
    </Card>
  )
}

export default Expenses
