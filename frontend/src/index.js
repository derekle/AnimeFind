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
	<React.StrictMode>
		<App />
	</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
