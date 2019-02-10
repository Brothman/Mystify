export const RECEIVE_SONG = "RECEIVE_SONG";
export const PLAY_SONG = "PLAY_SONG";
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

