import React from 'react'
import { connect } from 'react-redux'
import { filterText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/Filters'
import {DateRangePicker} from 'react-dates'

class ExpenseListFilters extends React.Component{
  state = {
    startDate: null,
    endDate: null,
 focusedInput:null


  }
  onDatesChange = ({ startDate, endDate }) => {
  this.props.dispatch(setStartDate(startDate))
   this.props.dispatch(setEndDate(endDate))
    
  }
  onFocusChange = (focusedInput) => {
    this.setState(()=>({ focusedInput}))
  }
 
  render() {
    return (
       <div>
    <input  type="text" placeholder='Search' value={this.props.filters.text}
      onChange={(e) => {
      this.props.dispatch(filterText(e.target.value))
      }}      
   />

    <select value={this.props.filters.sortBy}onChange={(e) => {
      if (e.target.value === 'date') {
       this.props.dispatch(sortByDate())
      } else if (e.target.value ==='amount') {
        this.props.dispatch(sortByAmount())
      
      }
     
    }}>
      <option value='amount'>Amount</option> 
    <option value='date'>Date</option>
        </select>
       <DateRangePicker
  startDate={this.state.startDate} 
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.state.endDate} 
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={this.onDatesChange} 
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
  isOutsideRange={() => false}
  numberOfMonths={1}
  // showClearDate={true}
/>
        
  </div>
  
)
 
  }
}



 
const mapStateToProps = (state) => {
  return {
    filters:state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)