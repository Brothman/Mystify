import { RECEIVE_ALBUMS} from '../actions/albumActions.js';
import { RECEIVE_ALBUM} from '../actions/albumActions.js';

//default state is the empty Object

const albumsReducer = (state = [[]], action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_ALBUMS):
            return action.albums;
        case (RECEIVE_ALBUM):
            return action.albums;
        default:
            return state;
    }
};

export default albumsReducer;
