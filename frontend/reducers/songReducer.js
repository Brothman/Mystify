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

const showPauseButton = () => {
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.style.display = "none";
    pause.style.display = "inline";
}

const showPlayButton = () => {
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.style.display = "inline";
    pause.style.display = "none";
};

//default state is the empty Object
const songReducer = (state = {}, action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);
    const oldSong = state;

    switch (action.type) {
        case (PLAY_SONG):
            //there is no old song for the play-pause buttotn
            if (!oldSong && !action.song) {
                return state;
            }
            else if (!action.song && !oldSong.paused) {
                oldSong.pause();
                showPlayButton();
                return state;
            }
            else if (!action.song && oldSong.paused) {
                oldSong.play();
                showPauseButton();
                return state;
            }
            //for a new track
            else if (!oldSong.src) {
                action.song.play();
                showPauseButton();

                const input = document.querySelector('.audio-player__time-slider');
                action.song.addEventListener('timeupdate', () => updateTimeInState(action.song, input));
                return action.song;
            }
            else if (oldSong.src == action.song.src && !oldSong.paused) {
                oldSong.pause();
                showPlayButton();
                return oldSong;
            }
            else if (oldSong.src == action.song.src) {
                oldSong.play();
                showPauseButton();
                return oldSong;
            }
            else {
                oldSong.pause();

                const input = document.querySelector('.audio-player__time-slider');
                oldSong.removeEventListener('timeupdate', () => updateTimeInState(oldSong, input));

                action.song.play();
                showPauseButton();

                action.song.addEventListener('timeupdate', () => updateTimeInState(action.song, input));
                return action.song;
            }
        case (UPDATE_CURRENT_TIME): 
            oldSong.currentTime = action.time;
            return oldSong;
        default:
            return state;
    };
};

export default songReducer;