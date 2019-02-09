import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/rootReducer.js';

//basic middleware pacakge
const middlewares = [thunk];

const configureStore = (preLoadedState = {}) => {
    return createStore(rootReducer,
        preLoadedState,
        applyMiddleware(...middlewares));
};

export default configureStore;

//TODO make a snippet out of this, i.e. to create redux store easily