export const RECEIVE_SONG = "RECEIVE_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const UPDATE_CURRENT_TIME = "UPDATE_CURRENT_TIME";
export const ADD_SONG_TO_PLAY_QUEUE = "ADD_SONG_TO_PLAY_QUEUE";
export const ADD_SONG_TO_NEW_PLAY_QUEUE = "ADD_SONG_TO_NEW_PLAY_QUEUE";
// import * as ArtistAPI from '../utils/artistAPI';

//Regular action creator, return a plain old Javascript object.
//MAY GIVE A SPECIFIC ALBUM REDUCER
export const receiveSong = (song) => {
    return {
        type: RECEIVE_SONG,
        song: song.data,
    };
};

//Regular action creator, return a plain old Javascript object.
export const playSong = (song) => {
    return {
        type: PLAY_SONG,
        song: song,
    };
};

export const updateSongCurrentTime = (time) => {
    return {
        type: UPDATE_CURRENT_TIME,
        time: time,
    };
};

export const addSongToPlayQueue = (song) => {
    return {
        type: ADD_SONG_TO_PLAY_QUEUE,
        song: song,
    };
};

export const addSongToNewPlayQueue = (song) => {
    return {
        type: ADD_SONG_TO_NEW_PLAY_QUEUE,
        song: song,
    };
};