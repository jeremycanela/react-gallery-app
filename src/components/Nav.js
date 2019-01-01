// Prerequisites
import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = (props) => {
	return(
		<nav className="main-nav">
			<ul>
				<li><NavLink exact to='/cats' onClick={() => props.galleryChange("cats")}>Cats</NavLink></li>
				<li><NavLink exact to='/dogs' onClick={() => props.galleryChange("dogs")}>Dogs</NavLink></li>
				<li><NavLink exact to='/birds' onClick={() => props.galleryChange("birds")}>Birds</NavLink></li>
			</ul>
		</nav>
	);
}

Nav.propTypes = {
	galleryChange: PropTypes.func
};

export default Nav;