import React from 'react'
import SearchPage from './search_page.js'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {title: ""}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateField = this.updateField.bind(this)
    }

    updateField(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    renderSearch(stylists){
        return (
            <SearchPage stylists={stylists}/>
        )
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.stylistSearch(this.state.handle).then((stylists) =>
        this.renderSearch(stylists))
    }

    render() {
        return (
                <form className="search-form"onSubmit={this.handleSubmit}>
                <input 
                className="search-bar" 
                type="search"
                placeholder="Find a stylist"
                onChange={this.updateField('handle')}/>
                <button type="submit">&#128269;</button>
                </form>
        )
    }
}

export default Search