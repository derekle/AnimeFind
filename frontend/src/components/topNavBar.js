import '../css/topNavBar.css'
import '../css/sideBar.css'

import React, { Component } from 'react';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import { touchRippleClasses } from '@mui/material';

import Sidebar from './sideBar'

class TopNavBar extends Component {
	constructor(props) {
		super(props)

		this.search = this.search.bind(this)
		this.state = {
			sideBarVisible: false
		}
	}
	
	search() {
		console.log('form clicked!!!!')
		this.props.history.push('/Search')
	}

	toggleSidebar = () => this.setState(state => ({
		sideBarVisible: !state.sideBarVisible,
	}));
	

	render() {
		console.log('rendering')
		console.log(this.state)
		return (
			<div className='menuContainer'>
				<nav className='topNav'>
					<div id='menuButton'>
						<IconButton
							className='menuBtn'
							size="large"
							edge="start"
							aria-label="menu"
							sx={{ mr: 2 }}
							color='primary'
							fontSize="medium"
							onClick={this.toggleSidebar}
						>
							<MenuIcon />
						</IconButton>
					</div>
					<div id='form'>
						<form id='searchForm' onClick={this.search}>
									<input placeholder='search'></input>
									<button type='submit'><img id='searchButton' src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Vector_search_icon.svg' alt='MediaWiki authors, Public domain, via Wikimedia Commons'/></button>
						</form>
					</div>
				</nav>
				<Sidebar show={this.state.sideBarVisible}/>
			</div>
		)
	}
}

export default withRouter(TopNavBar)
