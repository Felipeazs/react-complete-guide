import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
  const yearSelectedHandler = (event) => {
    props.onSelectedYear(event.target.value)
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter__label">filter By year</label>
        <select
          className="expenses-filter__select"
          onChange={yearSelectedHandler}
          value={props.default}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter
