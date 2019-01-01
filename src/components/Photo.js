// Prerequisites
import React from 'react';
import PropTypes from 'prop-types';

const Photo = (props) => {
	return(
		<li>
			<img src={props.source} alt={props.title} />
		</li>
	);
}

Photo.propTypes = {
	source: PropTypes.string,
	title: PropTypes.string
};

export default Photo;