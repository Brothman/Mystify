import { combineReducers } from 'redux';
import tracksReducer from './tracksReducer.js';
import albumsReducer from './albumsReducer.js';
import artistReducer from './artistReducer.js';
// import artistsReducer from './artistsReducer.js';


const entitiesReducer = combineReducers({
    tracks: tracksReducer,
    albums: albumsReducer,
    artist: artistReducer,
});

export default entitiesReducer;