import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Passwords } from './pages/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = {
    Passwords,
}

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(
    rootReducer,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools(applyMiddleware(thunk)),
);