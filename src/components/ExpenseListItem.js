import React from 'react'
import {Link} from 'react-router-dom'
import {removeExpense} from '../actions/Expenses'
import {connect } from 'react-redux'




const ExpenseListItems = ({dispatch,id,description, amount, createdAt, }) => (
  <div>
    <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
    </Link>

    <p>{amount}-{createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }))
      
    }}>Delete</button>
    
    </div>
)



export default connect()(ExpenseListItems)
    

