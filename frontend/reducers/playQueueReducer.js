import { ADD_SONG_TO_PLAY_QUEUE } from '../actions/songActions.js';
import { CLEAR_PLAY_QUEUE, REPLACE_PLAY_QUEUE, SHUFFLE_PLAY_QUEUE } from '../actions/playQueueActions.js';

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const turnOnShuffleButton = () => {
    const shuffleButton = document.querySelector('.shuffle');
    shuffleButton.classList.add('shuffle--active');
}

const turnOffShuffleButton = () => {
    const shuffleButton = document.querySelector('.shuffle');
    shuffleButton.classList.remove('shuffle--active');
}

//default state is the empty Object

const playQueueReducer = (state = [], action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);
    let playQueue;

    switch (action.type) {
        case (ADD_SONG_TO_PLAY_QUEUE):
            playQueue = [...state];
            playQueue.push(action.song)
            return playQueue;
        case (CLEAR_PLAY_QUEUE):
            return [];
        case (REPLACE_PLAY_QUEUE):
            return action.newPlayQueue;
        case (SHUFFLE_PLAY_QUEUE):
            playQueue = [...state];
            playQueue.originalArr = state.originalArr;
            if (playQueue.originalArr) {
                turnOffShuffleButton();
                playQueue = playQueue.originalArr;
                return playQueue;
            }
            else {
                turnOnShuffleButton();
                playQueue.originalArr = state;
                playQueue = shuffle(playQueue);
                return playQueue;
            }
        default:
            return state;
    };
};

export default playQueueReducer;