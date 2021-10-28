import './css/App.css';
import React, { Component } from 'react';
import Routes from './routes'
import { BrowserRouter as Router } from "react-router-dom";

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