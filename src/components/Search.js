// Prerequisites
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';

const history = createHistory();

class Search extends Component {
	searchQuery = React.createRef();
	
	state = {
		query: "cats",
		submit: false
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			query: this.searchQuery.current.value,
			submit: true
		});
		this.props.galleryChange(this.searchQuery.current.value);
		history.push(`/${this.state.query}`, {query: this.state.query});
		event.currentTarget.reset();
	}

	componentDidUpdate = () => {
		if(this.state.submit) {
			this.setState({
				submit: false
			});
		}
	}

	render() {
		return(
			<form className="search-form" onSubmit={this.handleSubmit}>
				{
					this.state.submit ? <Redirect to={`/${this.state.query}`} /> : null
				}
				<input type="search" name="search" placeholder="Search" ref={this.searchQuery} required/>
				<button type="submit" className="search-button">
					<svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
						<path d="M0 0h24v24H0z" fill="none"/>
					</svg>
				</button>
			</form>
		);
	}
}

Search.propTypes = {
	galleryChange: PropTypes.func
};

export default Search;