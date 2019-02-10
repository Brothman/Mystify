import { PLAY_SONG, UPDATE_CURRENT_TIME } from '../actions/songActions.js';

const updateTimeInState = (song, input) => {
    let min = input.min;
    let max = input.max;
    let val = song.currentTime;
    input.value = val;

    let realVal = (val - min) / max - min;

    input.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
        + 'color-stop(' + realVal + ', #aaa), '
        + 'color-stop(' + realVal + ', #404040)'
        + ')';
} 

const makeButtonPlay = () => {

}

const makeButtonPause = ( ) => {
     
};

//default state is the empty Object
const songReducer = (state = {}, action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);

    switch (action.type) {
        case (PLAY_SONG):
            const oldSong = state;
            //there is no old song for the play-pause buttotn
            if (!oldSong && !action.song) {
                return state;
            }
            else if (!action.song && !oldSong.paused) {
                oldSong.pause();
                return state;
            }
            else if (!action.song && oldSong.paused) {
                oldSong.play();
                return state;
            }
            //for a new track
            else if (!oldSong.src) {
                action.song.play();
                const input = document.querySelector('.audio-player__time-slider');
                action.song.addEventListener('timeupdate', () => updateTimeInState(action.song, input));
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
                const input = document.querySelector('.audio-player__time-slider');

                oldSong.removeEventListener('timeupdate', () => updateTimeInState(oldSong, input));

                action.song.play();
                action.song.addEventListener('timeupdate', () => updateTimeInState(action.song, input));
                return action.song;
            }
        case (UPDATE_CURRENT_TIME): 
            const song = state;
            song.currentTime = action.time;
            return song;
        default:
            return state;
    };
};

export default songReducer;