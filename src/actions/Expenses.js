import uuid from 'uuid'
// Add Expense
export const addExpense = ({description='', note='', amount  ='', createdAt=''}={}) => ({
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
export const removeExpense = (({ id}) => ({
  type: 'REMOVE_EXPENSE',
  id,
 }))
// EDIT EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

