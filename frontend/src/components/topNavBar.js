// topnavbar - handles the rendering of the top navigation bar - stateful - this component keeps track of the sidebar visibility state, changed via the menu button

//react
import React, { Component } from 'react';

//components
import Sidebar from './sideBar'
import Searchbar from './searchBar'

//mui
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

//css
import '../css/topNavBar.css'
import '../css/sideBar.css'


class TopNavBar extends Component {
	// since the toggle for the sidebar menu is rendered at this component, we will keep the state here in the parent component
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
