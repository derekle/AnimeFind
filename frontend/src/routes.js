import React from 'react'
import Home from './views/Home'
import Search from './views/Search'

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
                    <Route exact path='/Search'>
                        <Search />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Routes