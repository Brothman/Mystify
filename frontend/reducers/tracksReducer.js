import { RECEIVE_TRACKS, CLEAR_TRACKS } from '../actions/trackActions.js';

//default state is the empty Object

const tracksReducer = (state = [], action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);

    switch(action.type) {
        case (RECEIVE_TRACKS):
            return action.tracks;
        case (CLEAR_TRACKS):
            return [];
        default:
            return state;
    }
};

export default tracksReducer;
