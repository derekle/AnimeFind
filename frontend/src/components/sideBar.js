import React, { Component } from 'react';


import '../css/sideBar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PageviewIcon from '@mui/icons-material/Pageview';

import {withRouter} from 'react-router-dom'
import {useHistory} from 'react-router-dom';


export default function Sidebar(props) {
    const history = useHistory();
    const handleOnClick = (e) => {
        console.log(e.target.id)
        history.push(e.target.id)
    }

    return (
        <div>
            <div className={'visible-'+props.show.toString()+'-sidebar'}>
                <nav className='list'>
                    <li id='/Home' className='listitem'  onClick={handleOnClick}>
                        <div className='listicon'>
                            <HomeIcon />
                        </div>
                        <div className='listlabel'>
                            Home
                        </div>
                    </li>
                    <li id='/Search' className='listitem'  onClick={handleOnClick}>
                        <div className='listicon'>
                            <SearchIcon />
                        </div>
                        <div className='listlabel'>
                            Search
                        </div>
                    </li>
                    <li id='/Browse' className='listitem'  onClick={handleOnClick}>
                        <div className='listicon'>
                            <PageviewIcon />
                        </div>
                        <div className='listlabel'>
                            Browse
                        </div>
                    </li>
                </nav>
            </div>
                    <div id='Home' className={'visible-' + props.show.toString() + '-overlay'}/>
        </div>
    )
}