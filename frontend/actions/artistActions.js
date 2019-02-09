export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
import * as ArtistAPI from '../utils/artistAPI';

//Regular action creator, return a plain old Javascript object.
//MAY GIVE A SPECIFIC ALBUM REDUCER
export const receiveArtist = (artist) => {
    return {
        type: RECEIVE_ARTIST,
        artist: artist.data,
    };
};

//Return a function (Thunk Action Creator)
export const getArtist = (artistID) => {
    return async (dispatch) => {
        try {
            const artist = await ArtistAPI.getArtist(artistID);
            dispatch(receiveArtist(artist));
        }
        catch (e) {
            console.log(e);
        }
    };
};