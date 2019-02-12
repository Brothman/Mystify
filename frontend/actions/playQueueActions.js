export const PLAY_NEXT_SONG = "PLAY_NEXT_SONG";
// import * as ArtistAPI from '../utils/artistAPI';

//Regular action creator, return a plain old Javascript object.
//MAY GIVE A SPECIFIC ALBUM REDUCER
export const playNextSong = () => {
    return {
        type: RECEIVE_SONG,
        song: '',
    };
};