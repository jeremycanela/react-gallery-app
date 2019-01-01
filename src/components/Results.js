// Prerequisites
import React from 'react';
import PropTypes from 'prop-types';

// App components
import Photo from './Photo';
import NotFound from './NotFound';
import Loading from './Loading';

const Results = (props) => {
	return(
		<div className="photo-container">
			<h2>Results</h2>
			<ul>
				{
					props.loading ? <Loading /> : null
				}
				{
					props.data.map(photo =>
						<Photo
							source={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
							title={photo.title}
							key={photo.id}
						/>)
				}
				{
					props.data.length === 0 && !props.loading ? <NotFound NotFoundError={props.NotFoundError} /> : null
				}

			</ul>
		</div>
	);
}

Results.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.bool
};

export default Results;