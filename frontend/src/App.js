//react
import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

//components
import Routes from './routes'

//mui
import { createTheme} from '@mui/material/styles';

//css
import './css/App.css';



class App extends Component {
 componentDidMount() {
    this.props.theme( createTheme({ palette: { mode: 'dark' } }))
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

const mapDispatchToProps = (dispatch) => {
  return {
    theme: (data) => dispatch({ type: "SET_THEME", theme: data }),
  };
};

export default connect(null, mapDispatchToProps)(App)