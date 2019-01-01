// Prerequisites
import React from 'react';

const NotFound = (props) => {
	return(
		<li className="not-found">
			<h3>{props.NotFoundError ? "404: Page not found" : "No Results Found"}</h3>
			<p>Your search did not return any results. Please try again.</p>
		</li>
	);
}

export default NotFound;