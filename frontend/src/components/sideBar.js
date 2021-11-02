// sidebar - handles rendering the sidebar navigation menu - stateless

//react
import React from 'react';

//The useHistory hook gives you access to the history instance that you may use to navigate - https://reactrouter.com/web/api/Hooks/usehistory
import {useHistory} from 'react-router-dom';

//components
//mui
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

//css
import '../css/sideBar.css'


// must be a function in order to use react hook useHistory
export default function Sidebar(props) {
    // we use the useHistory hook here to allow our menu link components change our routes, since they aren't explicit <a/> links or buttons.
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
                </nav>
            </div>
            <div id='Home' className={'visible-' + props.show.toString() + '-overlay'}/>
        </div>
    )
}