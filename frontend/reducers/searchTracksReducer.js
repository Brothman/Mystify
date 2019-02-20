import { RECEIVE_SEARCH_TRACKS } from '../actions/searchActions.js';

//default state is the empty Object

const searchTracksReducer = (state = [], action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_SEARCH_TRACKS):
            return action.tracks;
        default:
            return state;
    }
};

export default searchTracksReducer;
