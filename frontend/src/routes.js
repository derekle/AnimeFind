// routes - the core of our application and how we handle navigation - stateless

//react
import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
// useSelectore allows us to access the state from this component
import { useSelector } from "react-redux";

//components
import Home from './views/Home'
import Search from './views/Search'
import Info from './views/Info'
import TopNavBar from './components/topNavBar'

const Routes = props => {
    //access the current theme in the store
    const theme = useSelector((state) => state.theme)
    console.log(props)
    return (
        <div>
            <TopNavBar theme={theme} />
                <Switch>
                    <Route exact path='/Home'>
                        <Home theme={theme}/>
                    </Route>
                    <Route exact path='/Search'>
                        <Search theme={theme}/>
                    </Route>
                    <Route path={`/anime/info/:topicId`}>
                        <Info />
                    </Route>
                
                    {/* redirect all invalid urls not listed above to /Home */}
                    <Redirect to="/Home" />
                </Switch>
        </div>
    )
}
export default Routes