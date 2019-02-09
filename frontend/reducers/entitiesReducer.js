import { combineReducers } from 'redux';
import tracksReducer from './tracksReducer.js';

const entitiesReducer = combineReducers({
    tracks: tracksReducer
});

export default entitiesReducer;