import { RECEIVE_ARTIST } from '../actions/artistActions.js';

//default state is the empty Object

const artistsReducer = (state = {}, action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_ARTIST):
            return action.artist;
        default:
            return state;
    };
};

export default artistsReducer;
