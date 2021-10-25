import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TopNavBar from './components/topNavBar'

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import reportWebVitals from './reportWebVitals';
import animeReducer from './reducers/animeReducer';


const store = createStore(animeReducer, applyMiddleware(thunk));
const darkTheme = createTheme({ palette: { mode: 'dark' } });


ReactDOM.render(
	<div className='main'>
		<Provider store={store}>
			<TopNavBar theme={darkTheme}/>
			<main className="parallaxMain">

				<section className="parallaxSection parallaxSection--header">
					<div className='headerContent'>
						<h1 className='headerText'>MY APP</h1>
						<p className='subText'>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.</p>
					</div>
					<div className='gradient'/>
				</section>
				<section className="staticSection staticSection--base">
					<App theme={darkTheme} />
				</section>
				<section className='footerSection'>
					<div className='footerContent'>
					<h2 className='footerText'>FOOTER</h2>
					<p className='subText'>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.</p>
					</div>
				</section>
			</main>
		</Provider>
	</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
