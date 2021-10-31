import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import reportWebVitals from './reportWebVitals';
import reducer from './reducers/reducers'
import store from './configureStore'

console.log(store.getState())

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
