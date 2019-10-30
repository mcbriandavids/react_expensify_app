import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpense from '../selectors/Visible_Expenses_Selector'



const ExpenseList = (props) => (
  <div>
    
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id}{...expense}/>
     
    })}
   
  </div>
)
const mapStateToProps = (state) => {
  return {
    expenses: selectExpense(state.expenses, state.filters),
      
  }
}
export default connect(mapStateToProps)(ExpenseList)