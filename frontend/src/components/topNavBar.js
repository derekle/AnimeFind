import '../css/topNavBar.css'
import React, { Component } from 'react';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'


class TopNavBar extends Component {
	constructor(props) {
    super(props)

    this.search = this.search.bind(this)
	  }
	
	search() {
		console.log('form clicked!!!!')
		this.props.history.push('/Search')
	}

	render() {
		return (
			
			<nav className='topNav'>
				<div id='accountButton'>
					<IconButton
						size="large"
						edge="start"
						aria-label="menu"
						sx={{ mr: 2 }}
						color='primary'
						fontSize="medium"
						component={Link}
  						to='/Home'
					>
						<MenuIcon/>
					</IconButton>
				</div>
				<div id='form'>
					<form id='searchForm' onClick={this.search}>
								<input placeholder='search'></input>
								<button type='submit'><img id='searchButton' src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Vector_search_icon.svg' alt='MediaWiki authors, Public domain, via Wikimedia Commons'/></button>
					</form>
				</div>
			</nav>
		)
	}
}

export default withRouter(TopNavBar)
