export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
import * as ArtistAPI from '../utils/artistAPI';

//Regular action creator, return a plain old Javascript object.
//MAY GIVE A SPECIFIC ALBUM REDUCER
export const receiveArtist = (artist) => {
    return {
        type: RECEIVE_ARTIST,
        artist: artist.data,
    };
};

//Regular action creator, return a plain old Javascript object.
export const receiveArtists = (artists) => {
    return {
        type: RECEIVE_ARTISTS,
        artists: artists.data,
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

//Return a function (Thunk Action Creator)
export const getArtists = () => {
    return async (dispatch) => {
        try {
            const artists = await ArtistAPI.getArtists();
            dispatch(receiveArtists(artists));
        }
        catch (e) {
            console.log(e);
        }
    };
};