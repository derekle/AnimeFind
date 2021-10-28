import '../css/topNavBar.css'
import '../css/sideBar.css'

import React, { Component } from 'react';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Sidebar from './sideBar'
import Searchbar from './searchBar'

class TopNavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sideBarVisible: false
		}
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
						<Searchbar />
					</div>
				</nav>
				<Sidebar show={this.state.sideBarVisible}/>
			</div>
		)
	}
}

export default TopNavBar
