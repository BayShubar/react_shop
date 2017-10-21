import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import Reducers from './store/Reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'


const store = createStore(
		Reducers,
		composeWithDevTools(applyMiddleware(thunk))
	);



ReactDOM.render(
	<Provider store = { store } >
		<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
