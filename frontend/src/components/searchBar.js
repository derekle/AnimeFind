// searchbar - handles rendering and data handling of the searchbar form at the top of the page - stateful - this component keeps track of its current input value for querying

//react
import React, { Component } from 'react';

//withRouter - gives us access to this.props.history, which means we can now redirect the user with this component - LondonRob, https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";


class Searchbar extends Component {
    constructor(props) {
		super(props)       
        this.state = {
            text: '',
            url: '',
        };
    }

    handleOnClick = () => {
		console.log('form clicked!!!!')
		this.props.history.push('/search')
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value,
            url: '?q='+e.target.value+'&type=anime'
        });
    }

    handleSubmit = (e) => {
        console.log('form submitting...')
        e.preventDefault();
        this.props.query(this.state);
        this.props.history.replace('/search'+this.state.url)
    };

    render() {
        console.log(this.state.text)
        return(
            <form id='searchForm' onClick={this.handleOnClick} onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.text} required minLength="3" placeholder='search'/>
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