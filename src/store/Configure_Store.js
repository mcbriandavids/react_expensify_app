import { createStore, combineReducers } from 'redux'
 import  expensesReducer  from '../Reducers/Expenses_Reducer'
import filterReducer  from '../Reducers/Filters_Reducer'



// Store
const expenseStore= () => {
    const store = createStore(combineReducers({
  expenses: expensesReducer,
      filters: filterReducer,
  
    }
    
    ),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return store
 
}

  
export default expenseStore