import { ADD_SONG_TO_NEW_PLAY_QUEUE } from '../actions/songActions.js';
import { CLEAR_NEW_PLAY_QUEUE, REPLACE_PLAY_QUEUE } from '../actions/playQueueActions.js';

//default state is the empty Object

const newPlayQueueReducer = (state = [], action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);

    switch (action.type) {
        case (ADD_SONG_TO_NEW_PLAY_QUEUE):
            const playQueue = [...state];
            playQueue.push(action.song);
            return playQueue;
        case (CLEAR_NEW_PLAY_QUEUE):
            return [];
        case (REPLACE_PLAY_QUEUE):
            return [];
        default:
            return state;
    };
};

export default newPlayQueueReducer;