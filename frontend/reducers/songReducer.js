import { RECEIVE_SONG } from '../actions/songActions.js';

//default state is the empty Object

const songReducer = (state = {}, action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_SONG):
            return action.song;
        default:
            return state;
    };
};

export default songReducer;