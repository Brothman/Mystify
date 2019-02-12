import { combineReducers } from 'redux';
import tracksReducer from './tracksReducer.js';
import albumsReducer from './albumsReducer.js';
import artistReducer from './artistReducer.js';
import artistsReducer from './artistsReducer.js';
import songReducer from './songReducer.js';
import playQueueReducer from './playQueueReducer.js';


const entitiesReducer = combineReducers({
    tracks: tracksReducer,
    albums: albumsReducer,
    artist: artistReducer,
    artists: artistsReducer,
    song: songReducer,
    playQueue: playQueueReducer,
});

export default entitiesReducer;