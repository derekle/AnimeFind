//react
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//components
import App from './App';

//mui
import { createTheme} from '@mui/material/styles';

//store
import store from './configureStore'

//automatically generated
import reportWebVitals from './reportWebVitals';

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
