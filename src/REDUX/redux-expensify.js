import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// Add Expense
const addExpense = ({description='', note='', amount  ='', createdAt=''}={}) => ({
  type: 'ADD_EXPENSE',
  expense:{
    id: uuid(),
    description,
    note,
    amount, 
    createdAt
  }
})
// Remove Expense
const removeExpense = (({ id}) => ({
  type: 'REMOVE_EXPENSE',
  id,
 }))
// EDIT EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// Filter Expense
const filterText = (text='') => ({
  type: 'FILTER_TEXT',
  text
})
// Sort By Date
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  
})
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})
const setEndDate = (setEndDate) => ({
  type: 'SET_END_DATE',
  setEndDate
})
const setStartDate = (setStartDate) => ({
  type: 'SET_START_DATE',
  setStartDate
  
})





// Expenses Reducer default state
const expensesReducerDefault = []

const expensesReducer = (state = expensesReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
   
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !==action.id
      )
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        }
   })
    default:
      return state
  }
}
// Filter Reducer Default State
const defaultFilters = {
  text: '',
  sortBy: undefined,//for amount & date 
  startDate: undefined,
  endDate: undefined
};

// Filters section on Reducer

const filterReducer = (state = defaultFilters, action) => {
  switch (action.type) {
    case 'FILTER_TEXT':
      return {
       ...state,
        text:action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy:'date'
        
      }
      case 'SORT_BY_AMOUNT':
      return {
        ...state,
        
        sortBy:'amount'
        
      }
     case 'SET_END_DATE':
      return {
        ...state,
        endDate:action.setEndDate
        
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.setStartDate
      }
 
  default:
      return state
  }
}
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1:-1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1:-1
    }
  })

}

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filterReducer
}))

store.subscribe(() => {
  const state = store.getState()
  const visibleExpense = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpense)
  // console.log(store.getState())
})
 // Dispatch
 const expenseOne= store.dispatch(addExpense({description:'Rent', amount:9000, note:'Rent Expense', createdAt:-21000}))
const expenseTwo=store.dispatch(addExpense({  amount: 10000, description: 'Coffee Expenses', note:'note', createdAt:-1000}))

// store.dispatch(removeExpense({id:expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id, {amount:9000, description:'new description'}))


// Filters section

// store.dispatch(filterText('coff'))
// store.dispatch(filterText('c'))

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())


// store.dispatch(setEndDate(2323)) //working

// store.dispatch(setStartDate(2000)) //working
// store.dispatch(setEndDate(1250)) //working






const demoState = {
  expenses: [{
    id: '',
    description: 'January Rent',
    note: 'This was the final payment fot that address',
    createdAt:0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //Date or amount
    startDate: undefined,
    endDate: undefined
  }
}

const user = {
  name: 'Brian',
  age:37
}
