import React from 'react';

class Search extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			query: '',
			results: {},
			loading: false,
			message: '',
		};
	}

	handleOnInputChange = (event) => {
		const query = event.target.value;
				this.setState({ query, loading: true, message: ''  } );
	};

	render() {
		return (
			<div className="container">
				{/*Heading*/}
				<h2 className="heading">Live Search: React Application</h2>
				{/*Search Input*/}
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value=""
						id="search-input"
						placeholder="Search..."
						onChange = {this.handleOnInputChange}
					/>
					<i className="fa fa-search search-icon"/>
				</label>
				
			</div>
			)
	}
}
export default Search;