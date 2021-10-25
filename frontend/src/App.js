import './App.css';

import React, {Component} from 'react';
import AnimeList from './components/animeList.js'


class App extends Component {
  render() {
    console.log('rendering...')
    console.log(this.props)
    return (
      <div className='shows'>
        <AnimeList header='Top 10 Anime' resource='/filter/top' anime={this.props.anime} theme={this.props.theme} />
        <AnimeList header='All Anime' resource='/' anime={this.props.anime} theme={this.props.theme}/>
      </div>
    )
  }
}

export default App;
