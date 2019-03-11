export const PLAY_NEXT_SONG = "PLAY_NEXT_SONG";
export const CLEAR_PLAY_QUEUE = "CLEAR_PLAY_QUEUE";
export const CLEAR_NEW_PLAY_QUEUE = "CLEAR_NEW_PLAY_QUEUE";
export const REPLACE_PLAY_QUEUE = "REPLACE_PLAY_QUEUE";
export const SHUFFLE_PLAY_QUEUE = "SHUFFLE_PLAY_QUEUE";
// import * as ArtistAPI from '../utils/artistAPI';

//Regular action creator, return a plain old Javascript object.
//MAY GIVE A SPECIFIC ALBUM REDUCER
export const playNextSong = () => {
    return {
        type: RECEIVE_SONG,
        song: '',
    };
};

export const clearPlayQueue = () => {
    return {
        type: CLEAR_PLAY_QUEUE,
    };
};

export const clearNewPlayQueue = () => {
    return {
        type: CLEAR_NEW_PLAY_QUEUE,
    };
};

export const replacePlayQueue = (newPlayQueue) => {
    return {
        type: REPLACE_PLAY_QUEUE,
        newPlayQueue,
    };
};

export const shufflePlayQueue = () => {
    return {
        type: SHUFFLE_PLAY_QUEUE,
    };
};