import React from 'react'
import Home from './views/Home'
import Search from './views/Search'
import Browse from './views/Browse'

import TopNavBar from './components/topNavBar'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


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
                    <Route exact path='/Browse'>
                        <Browse />
                    </Route>
                    <Redirect to="/Home" />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Routes