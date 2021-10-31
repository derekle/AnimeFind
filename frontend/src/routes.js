import React from 'react'
import Home from './views/Home'
import Search from './views/Search'
import Browse from './views/Browse'
import Info from './views/Info'

import TopNavBar from './components/topNavBar'

import {
    BrowserRouter,
    Switch,
    Route,
    useRouteMatch,
    Redirect
} from "react-router-dom";

const Routes = props => {
    console.log(props)
    let { path, url } = useRouteMatch();

    return (
        <div>
        <BrowserRouter>
            <TopNavBar theme={props.theme} />
                <Switch>
                    <Route exact path='/Home'>
                        <Home theme={props.theme}/>
                    </Route>
                    <Route exact path='/'>
                        <Redirect to='/Home'/>
                    </Route>
                    <Route exact path='/Search'>
                        <Search theme={props.theme}/>
                    </Route>
                    <Route exact path='/Browse'>
                        <Browse />
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