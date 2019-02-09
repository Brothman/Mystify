import { combineReducers } from 'redux';
import entitiesReducer from './entitiesReducer.js';
// import sessionReducer from './session_reducer.js';
// import errorsReducer from './errors_reducer.js';

const rootReducer = combineReducers({
    entities: entitiesReducer,
});

export default rootReducer;