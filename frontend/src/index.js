import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

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
	<Provider store={store}>
		<App theme={darkTheme} />
	</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
