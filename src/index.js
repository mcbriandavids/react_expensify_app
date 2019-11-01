import './styles.css';
import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './Router/AppRouter';
import ConfigureStore from './store/Configure_Store';
import 'normalize.css/normalize.css';
import ReactDOM from 'react-dom';
import  VisibilitySelector  from './selectors/Visible_Expenses_Selector';


const store = ConfigureStore();


store.subscribe(() => {
  const state = store.getState();
  const VisibilityExpense = VisibilitySelector(state.expenses, state.filters);
  console.log(VisibilityExpense);
});

   ReactDOM.render(<Provider store={store}><AppRouter /> </Provider>, document.getElementById('app'));















