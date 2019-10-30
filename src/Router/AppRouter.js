import React from 'react';
import About from '../components/About';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';
import Help from '../components/Help';
import Home from '../components/Home';
import Error from '../components/Error';
import Edit from '../components/EditExpense'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRoute = () => (

	<BrowserRouter>
		<div>
			<Header />
		
			<Switch>
				<Route path='/' component={Home} exact={true} />
				<Route path='/about' component={About} />
				<Route path='/help' component={Help} />
				<Route path='/error' component={Error} />
				<Route path='/expense' component={AddExpense} />
				<Route path='/edit/:id' component={Edit} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRoute;
