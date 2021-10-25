import '../css/topNavBar.css'
import React, { Component } from 'react';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default class TopNavBar extends Component {

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
					>
						<MenuIcon/>
					</IconButton>
				</div>
				<div id='form'>
					<form id='searchForm'>
								<input placeholder='search'></input>
								<button type='submit'><img id='searchButton' src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Vector_search_icon.svg' alt='MediaWiki authors, Public domain, via Wikimedia Commons'/></button>
					</form>
				</div>
			</nav>
		)
	}
}