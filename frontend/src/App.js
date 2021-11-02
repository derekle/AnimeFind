// app - main component in the app - stateless

//react
import React, { Component } from 'react';
// we use BrowserRouter to maintain clean routes in our client-side. i.e. (/anime/info/28977/Gintama°). Advanatages: cleaner URL, no #, makes the app feel more like a traditional website. DisAdb, requires server configuration for deployment.
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

//components
import Routes from './routes'

//mui
import { createTheme} from '@mui/material/styles';

//css
import './css/App.css';

class App extends Component {

  // when the app starts up, set the theme and store it in the redux store so the whole app can see it. The theme function is provided by the Material UI Library.
 componentDidMount() {
    this.props.theme(createTheme({ palette: { mode: 'dark' } }))
  }

  render() {
    console.log('rendering...')
    console.log(this.props)
    return (
      <div>
        <Router>
          <Routes />
        </Router>
      </div>
    )
  }
}

// called from componentDidMount, this creates a dispatch function that our app component can call on through its props and send data to the reducer for processing.
const mapDispatchToProps = (dispatch) => {
  return {
    theme: (data) => dispatch({ type: "SET_THEME", theme: data }),
  };
};

export default connect(null, mapDispatchToProps)(App)