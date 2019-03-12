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

const safePlay = (song) => {
    const songPromise = song.play();
    let replacementSong = song;
    if (songPromise) {
        songPromise.catch(() => {
            song.pause();
            replacementSong = new Audio(song.src);
            // console.log(replacementSong)
            // replacementSong.play();
            //WE HAVE LEARNED SOME VALUABLE LESSONS TODAY:
            //1. IT IS THE OLD SONG THAT ERRORS OUT, NOT THE NEW ONE
            //2 The reason the new song doesn't play is because old requests are still firing in the background
            //3. I need to find a way to cancel API requests when they are no longer needed
            //4. I have a suspicion that happens by changing the src of one Audio tag. This is another re-factor of the entire code.
            console.log('Error occured')
        });
    }
    return replacementSong;
};


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
                const safeSong = safePlay(oldSong);
                showPauseButton();
                return {...state, song: safeSong};
            }
            //for a new track
            else if (!oldSong) {
                // newSong.play();
                const safeSong = safePlay(newSong);

                showPauseButton();

                const input = document.querySelector('.audio-player__time-slider');
                safeSong.addEventListener('timeupdate', () => updateTimeInState(newSong, input));
                return { 
                        title: action.song.title, 
                        albumImgURL: action.song.albumImgURL,
                        albumID: action.song.albumID,
                        artist: action.song.artist,
                        song: safeSong 
                    };
            }
            else if (oldSong.src == newSong.src && !oldSong.paused) {
                oldSong.pause();
                showPlayButton();
                return state;
            }
            else if (oldSong.src == newSong.src) {
                // oldSong.play();
                const safeSong = safePlay(oldSong);
                showPauseButton();
                return { ...state, song: safeSong };
            }
            else {
                oldSong.pause();
                //save src in case we go backwards and need to replay a song
                oldSong.backupSRC = oldSong.src;
                //clean up memory leaks and stop downloading/clear up sockets for future audio tags
                oldSong.src = "";
                
                oldSong.currentTime = 0;

                const input = document.querySelector('.audio-player__time-slider');
                oldSong.removeEventListener('timeupdate', () => updateTimeInState(oldSong, input));

                // newSong.play();
                const safeSong = safePlay(newSong);
                showPauseButton();

                safeSong.addEventListener('timeupdate', () => updateTimeInState(newSong, input));
                return {
                    title: action.song.title,
                    albumImgURL: action.song.albumImgURL,
                    albumID: action.song.albumID,
                    artist: action.song.artist,
                    song: safeSong
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