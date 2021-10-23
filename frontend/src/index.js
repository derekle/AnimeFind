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
import usersReducer from './reducers/usersReducer';


const store = createStore(usersReducer, applyMiddleware(thunk));
const darkTheme = createTheme({ palette: { mode: 'dark' } });


ReactDOM.render(
	<div class='main'>
		<Provider store={store}>
			<TopNavBar theme={darkTheme}/>
			<main class="parallaxMain">

				<section class="parallaxSection parallaxSection--header">
					<div class='headerContent'>
						<h1 class='headerText'>MY APP</h1>
						<text class='subText'>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.</text>
					</div>
					<div class='gradient'/>
				</section>
				<section class="staticSection staticSection--base">
					<App theme={darkTheme} />
				</section>
				<section class='footerSection'>
					<div class='footerContent'>
					<h2 class='footerText'>FOOTER</h2>
					<text class='subText'>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.</text>
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
