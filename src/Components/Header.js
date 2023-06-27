import React from 'react';
import { Link, Route } from 'react-router-dom';

export const Header = () => {
	return (
		<nav className="navbar">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					{' '}
					C R U D
				</Link>
				<div className="btn btn-light text-white">Log in</div>
			</div>
		</nav>
	);
};
