
// Filter Expense
export const filterText = (text='') => ({
  type: 'FILTER_TEXT',
  text
})
// Sort By Date
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  
})
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})
export const setEndDate = (setEndDate) => ({
  type: 'SET_END_DATE',
  setEndDate
})
export const setStartDate = (setStartDate) => ({
  type: 'SET_START_DATE',
  setStartDate
  
})