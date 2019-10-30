import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
	<div>
		<p>404 Page Not Found</p>
		<Link to='/'>Back to Home Page</Link>
	</div>
);

export default Error;
