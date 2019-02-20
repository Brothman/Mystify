export const RECEIVE_SEARCH_ALBUMS = "RECEIVE_SEARCH_ALBUMS";
export const RECEIVE_SEARCH_TRACKS = "RECEIVE_SEARCH_TRACKS";
export const RECEIVE_SEARCH_ARTISTS = "RECEIVE_SEARCH_ARTISTS";
import * as TrackAPI from '../utils/trackAPI';
import * as AlbumAPI from '../utils/albumAPI';
import * as ArtistAPI from '../utils/artistAPI';


//Return a function (Thunk Action Creator)
export const getAlbums = () => {
    return async (dispatch) => {
        try {
            const albums = await AlbumAPI.getAlbums();
            dispatch(receiveAlbums(albums));
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

//Regular action creator, return a plain old Javascript object.
export const receiveAlbums = (albums) => {
    return {
        type: RECEIVE_SEARCH_ALBUMS,
        albums: albums.data,
    };
};

//Regular action creator, return a plain old Javascript object.
export const receiveArtists = (artists) => {
    return {
        type: RECEIVE_SEARCH_ARTISTS,
        artists: artists.data,
    };
};

//Regular action creator, return a plain old Javascript object.
export const receiveTracks = (tracks) => {
    return {
        type: RECEIVE_SEARCH_TRACKS,
        tracks: tracks.data,
    };
};
