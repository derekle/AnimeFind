import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";


class Searchbar extends Component {
    constructor(props) {
		super(props)
        this.handleOnClick = this.handleOnClick.bind(this)
        
        this.state = {
            text: "",
        };

    }

    handleOnClick = () => {
		console.log('form clicked!!!!')
		this.props.history.push('/Search')
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value,
        });
    }

    handleSubmit = (e) => {
        console.log('form submitting...')
        e.preventDefault();
        this.props.query(this.state);
    };

    render() {
        console.log(this.state.text)
        return(
            <form id='searchForm' onClick={this.handleOnClick} onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.text} placeholder='search'/>
                <button type='submit'>
                    <img id='searchButton' src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Vector_search_icon.svg' alt='MediaWiki authors, Public domain, via Wikimedia Commons' />
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    query: (formData) => dispatch({ type: "SEARCHING_QUERY", query: formData }),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Searchbar))