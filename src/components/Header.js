import React from 'react';
import { NavLink } from 'react-router-dom';
const Head = () => (
	<div className='Header'>
		<header>
			<h1>Expensify</h1>
		</header>
		<NavLink activeClassName='is-active' to='/' exact={true}>
			Home
		</NavLink>
		<NavLink activeClassName='is-active' to='/about'>
			About
		</NavLink>
		<NavLink activeClassName='is-active' to='/help'>
			Help
		</NavLink>
		<NavLink activeClassName='is-active' to='/error'>
			Error
		</NavLink>
		<NavLink activeClassName='is-active' to='/expense'>
			AddExpense
		</NavLink>
	</div>
);

export default Head;
