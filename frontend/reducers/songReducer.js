import { PLAY_SONG, UPDATE_CURRENT_TIME } from '../actions/songActions.js';
import { showPlayButton, showPauseButton } from '../utils/editTheDOM';

const formatTime = (time) => {
    // Display formatted time
    // debugger
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    // return;
    if (seconds < 10) {
        return `${minutes}:0${seconds}`;
    }
    else {
        return `${minutes}:${seconds}`;
    }
}

const updateTimeInState = (song, input) => {
    let min = input.min;
    let max = input.max;
    let val = song.currentTime;
    input.value = val;

    const p = document.querySelector('.audio-player__time-start');
    p.innerHTML=formatTime(val);

    let realVal = (val - min) / max - min;

    input.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
        + 'color-stop(' + realVal + ', #aaa), '
        + 'color-stop(' + realVal + ', #404040)'
        + ')';
} 


//default state is the empty Object
//Be careful, not supposed to mutate state!
const songReducer = (state = {}, action) => {
    //Never mutate the original state in Redux
    Object.freeze(state);
    const oldSong = state.song;
    const newSong = action.song ? action.song.song : action.song;
    // const newSong = action.song || action.song.song;

    switch (action.type) {
        case (PLAY_SONG):
            //there is no old song for the play-pause buttotn
            if (!oldSong && !newSong) {
                return state;
            }
            else if (!newSong && !oldSong.paused) {
                oldSong.pause();
                showPlayButton();
                return state;
            }
            else if (!newSong && oldSong.paused) {
                //toFixed cretes a string representation at 2 decimals
                if (oldSong.currentTime.toFixed(2) === (oldSong.duration-0.1).toFixed(2)) {
                    //this is a hack because when I set currentTime to duration, I get a weird DOM error of 
                    //Failed to load, no supported source found -> DOMPromiseRejection
                    oldSong.currentTime = 0;
                }
                const oldSongPromise = oldSong.play();
                if (oldSongPromise) { 
                    oldSongPromise.catch(() => {
                        oldSong.play();
                        console.log('Error occured')
                    });
                }
                showPauseButton();
                return state;
            }
            //for a new track
            else if (!oldSong) {
                newSong.play();
                showPauseButton();

                const input = document.querySelector('.audio-player__time-slider');
                newSong.addEventListener('timeupdate', () => updateTimeInState(newSong, input));
                return { 
                        title: action.song.title, 
                        albumImgURL: action.song.albumImgURL,
                        albumID: action.song.albumID,
                        artist: action.song.artist,
                        song: newSong 
                    };
            }
            else if (oldSong.src == newSong.src && !oldSong.paused) {
                oldSong.pause();
                showPlayButton();
                return state;
            }
            else if (oldSong.src == newSong.src) {
                oldSong.play();
                showPauseButton();
                return state;
            }
            else {
                oldSong.pause();
                oldSong.currentTime = 0;

                const input = document.querySelector('.audio-player__time-slider');
                oldSong.removeEventListener('timeupdate', () => updateTimeInState(oldSong, input));

                newSong.play();
                showPauseButton();

                newSong.addEventListener('timeupdate', () => updateTimeInState(newSong, input));
                return {
                    title: action.song.title,
                    albumImgURL: action.song.albumImgURL,
                    albumID: action.song.albumID,
                    artist: action.song.artist,
                    song: newSong
                };
            }
        case (UPDATE_CURRENT_TIME): 
            oldSong.currentTime = action.time;
            return state;
        default:
            return state;
    };
};

export default songReducer;