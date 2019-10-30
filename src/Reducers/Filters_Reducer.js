import moment from 'moment'

// Filter Reducer Default State
const defaultFilters = {
  text: '',
  sortBy: undefined,//for amount & date 
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
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
export default filterReducer