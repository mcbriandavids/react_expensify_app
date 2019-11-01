import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/Expenses';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';





const ExpenseListItems = ({dispatch,id,description, amount, createdAt, }) => (
  <div>
    <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
    </Link>

    <p>{numeral(amount/100).format(	'$0,0.00')}-
    
    {moment(createdAt).format('MM/DD/YYYY')}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }))
      
    }}>Delete</button>
    
    </div>
)



export default connect()(ExpenseListItems)
    

