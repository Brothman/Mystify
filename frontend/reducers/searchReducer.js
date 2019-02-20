import { combineReducers } from 'redux';
import searchTracksReducer from './searchTracksReducer.js';
import searchAlbumsReducer from './searchAlbumsReducer.js';
import searchArtistsReducer from './searchArtistsReducer.js';


const entitiesReducer = combineReducers({
    tracks: searchTracksReducer,
    albums: searchAlbumsReducer,
    artists: searchArtistsReducer,
});

export default entitiesReducer;