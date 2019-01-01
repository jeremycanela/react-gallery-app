// Prerequisites
import React, { Component } from 'react';
import axios from 'axios';

// App components
import Search from './Search';
import Nav from './Nav';
import Results from './Results';

class Home extends Component {
	state = {
		query: "cats", // Stores the searched query
		photos: [], // Stores all the photos and their information
		loading: true // Stores the loading state
	};
	
	// Requests the photos from the Flickr API
	requestGallery(query) {
		axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
		.then(response => {
			this.setState({
				query,
				photos: response.data.photos.photo,
				loading: false
			});
		})
		.catch(error => {
			return console.error(error);
		});
	}

	// Refrences 'this' class to be passed on to other components
	galleryChange = this.requestGallery.bind(this);

	// Updates the gallery on every search
	updateGallery = () => {
		if(Object.keys(this.props.match.params).length !== 0) {
			let query = this.props.match.params.gallery;
			this.requestGallery(query);
		} else {
			this.setState({
				photos: [],
				loading: false
			});
		}
	}

	componentDidMount = () => {
		this.updateGallery();

		window.onpopstate = () => {
			this.updateGallery();
		};
	}

	render() {
		return (
			<div className="container">
				<Search galleryChange={this.galleryChange} />
				<Nav galleryChange={this.galleryChange} />
				<Results
					data={this.state.photos}
					loading={this.state.loading}
					NotFoundError={this.props.NotFoundError}
				/>
			</div>
		);
	}
}

export default Home;
