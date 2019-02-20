import { RECEIVE_SEARCH_ALBUMS } from '../actions/searchActions.js';

//default state is the empty Object

const searchAlbumsReducer = (state = [], action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_SEARCH_ALBUMS):
            return action.albums;
        default:
            return state;
    }
};

export default searchAlbumsReducer;
