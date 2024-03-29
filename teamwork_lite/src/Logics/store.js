import { createStore, applyMiddleware, compose } from 'redux';
import combinedReduer from './combineReducer';
import thunk from 'redux-thunk';
const middleware = [ thunk ];
const initialState = {};

const store = createStore(
	combinedReduer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
export default store;
