import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onNewExpense(expenseData) // Comunicación hijo-padre
    setIsFormDisplayed(false)
  }

  const changeDisplayedHandler = () => {
    setIsFormDisplayed(true)
  }

  const changeDisplayedState = () => {
    setIsFormDisplayed(false)
  }

  return (
    <div className="new-expense">
      {!isFormDisplayed && (
        <button onClick={changeDisplayedHandler}>Add new expense</button>
      )}
      {isFormDisplayed && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          stopSubmit={changeDisplayedState}
        />
      )}
    </div>
  )
}

export default NewExpense
