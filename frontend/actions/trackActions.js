export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

import * as TrackAPI from '../utils/trackAPI';

//Regular action creator, return a plain old Javascript object.
export const receiveTracks = (tracks) => {
    return {
        type: RECEIVE_TRACKS,
        tracks: tracks.data,
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


