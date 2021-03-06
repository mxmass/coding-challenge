import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import productReducer from './product';
import filtersReducer from './filters';
import listReducer from './list';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = createStore( 
    combineReducers({ listReducer, productReducer, filtersReducer }),
    composeEnhancers(applyMiddleware(reduxThunk))
);