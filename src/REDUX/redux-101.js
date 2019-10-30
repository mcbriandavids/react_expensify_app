import { createStore } from 'redux'

const incrementCount = ({incrementBy=1}={}) => ({
  type: 'INCREMENT',
incrementBy
})

const decrementCount = (({decrementBy=1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
}))
const resetCount = (({ reset=0}={}) => ({
  type: 'RESET',
  reset

}))

const setCount = (({ set } = {}) => ({
  type: 'SET',
  set
}))

const countReducer =  (state = { count: 0 }, action) => {

  switch (action.type) {
        case 'INCREMENT':
    
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
    
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.set
      }
    case 'RESET':
      return {
        count:action.reset
      }
  default:
  return state
  }

}
const store = createStore(countReducer)
 
const unsubscribe = store.subscribe(() => 
  console.log(store.getState())
)


store.dispatch(
incrementCount()
)
store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount())

store.dispatch(resetCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 10 }))


store.dispatch( setCount({set:50}))


