//react
import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";

//components
import Home from './views/Home'
import Search from './views/Search'
import Info from './views/Info'
import TopNavBar from './components/topNavBar'

const Routes = props => {
    const theme = useSelector((state) => state.theme)

    
    console.log(props)
    return (
        <div>
        <BrowserRouter>
            <TopNavBar theme={theme} />
                <Switch>
                    <Route exact path='/Home'>
                        <Home theme={theme}/>
                    </Route>
                    <Route exact path='/'>
                        <Redirect to='/Home'/>
                    </Route>
                    <Route exact path='/Search'>
                        <Search theme={theme}/>
                    </Route>
                    <Route path={`/anime/info/:topicId`}>
                        <Info />
                    </Route>
                    <Redirect to="/Home" />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Routes