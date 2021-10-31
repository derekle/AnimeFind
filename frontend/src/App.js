//react
import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

//components
import Routes from './routes'

//css
import './css/App.css';

class App extends Component {
  render() {
    console.log('rendering...')
    console.log(this.props)
    return (
      <div>
        <Router>
          <Routes theme={this.props.theme}/>
        </Router>
      </div>
    )
  }
}

export default App