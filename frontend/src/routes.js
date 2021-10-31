//react
import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

//components
import Home from './views/Home'
import Search from './views/Search'
import Info from './views/Info'
import TopNavBar from './components/topNavBar'

const Routes = props => {
    console.log(props)
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