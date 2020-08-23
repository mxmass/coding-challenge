import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import productReducer from './product';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = createStore( 
    combineReducers({ productReducer }), 
    composeEnhancers(applyMiddleware(reduxThunk))
);