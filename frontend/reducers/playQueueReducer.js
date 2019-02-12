import { ADD_SONG_TO_PLAY_QUEUE } from '../actions/songActions.js';

//default state is the empty Object

const playQueueReducer = (state = [], action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);

    switch (action.type) {
        case (ADD_SONG_TO_PLAY_QUEUE):
            const playQueue = [...state];
            playQueue.push(action.song)
            return playQueue;
        default:
            return state;
    };
};

export default playQueueReducer;