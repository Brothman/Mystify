import { PLAY_SONG } from '../actions/songActions.js';

//default state is the empty Object

const songReducer = (state = {}, action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);

    switch (action.type) {
        case (PLAY_SONG):
            const oldSong = state;
            //there is no old song
            if (!oldSong.src) {
                action.song.play();
                return action.song;
            }
            else if (oldSong.src == action.song.src && !oldSong.paused) {
                oldSong.pause();
                return oldSong;
            }
            else if (oldSong.src == action.song.src) {
                oldSong.play();
                return oldSong;
            }
            else {
                oldSong.pause();
                action.song.play();
                return action.song;
            }
        default:
            return state;
    };
};

export default songReducer;