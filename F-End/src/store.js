import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/index';
import authReducer from './redux/reducers/authReducer';

export default function configureStore(initialstate = {}) {
    const composeEnhancer = compose;


    return createStore(
        combineReducers({
            root: rootReducer,
            auth: authReducer
        }),
        initialstate,
        composeEnhancer(
            applyMiddleware(thunk),
        )
    );


}