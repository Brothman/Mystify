export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const CLEAR_TRACKS = "CLEAR_TRACKS";

import * as TrackAPI from '../utils/trackAPI';

//Regular action creator, return a plain old Javascript object.
export const receiveTracks = (tracks) => {
    return {
        type: RECEIVE_TRACKS,
        tracks: tracks.data,
    };
};

//Regular action creator, return a plain old Javascript object.
export const clearTracks = (tracks) => {
    return {
        type: CLEAR_TRACKS,
    };
};



//Return a function (Thunk Action Creator)
export const getAlbumTracks = (albumID) => {
    return async (dispatch) => {
        try {
            const tracks = await TrackAPI.getAlbumTracks(albumID);
            dispatch(receiveTracks(tracks));
        }
        catch(e) {
            console.log(e);
        }
    };
};

//Return a function (Thunk Action Creator)
export const getArtistTracks = (artistID) => {
    return async (dispatch) => {
        try {
            const tracks = await TrackAPI.getArtistTracks(artistID);
            dispatch(receiveTracks(tracks));
        }
        catch (e) {
            console.log(e);
        }
    };
};

//Return a function (Thunk Action Creator)
export const getAllTracks = () => {
    return async (dispatch) => {
        try {
            const tracks = await TrackAPI.getAllTracks();
            dispatch(receiveTracks(tracks));
        }
        catch (e) {
            console.log(e);
        }
    };
};


