import { RECEIVE_ARTISTS } from '../actions/artistActions.js';

//default state is the empty Object

const artistReducer = (state = [], action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_ARTISTS):
            return action.artists;
        default:
            return state;
    };
};

export default artistReducer;