import { RECEIVE_SEARCH_ARTISTS } from '../actions/searchActions.js';

//default state is the empty Object

const searchArtistsReducer = (state = [], action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_SEARCH_ARTISTS):
            return action.artists;
        default:
            return state;
    }
};

export default searchArtistsReducer;
