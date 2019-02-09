export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
import * as AlbumAPI from '../utils/albumAPI';

//Regular action creator, return a plain old Javascript object.
export const receiveAlbums = (albums) => {
    return {
        type: RECEIVE_ALBUMS,
        albums: albums.data,
    };
};

//Regular action creator, return a plain old Javascript object.
//MAY GIVE A SPECIFIC ALBUM REDUCER
export const receiveAlbum = (album) => {
    return {
        type: RECEIVE_ALBUM,
        albums: album.data,
    };
};


//Return a function (Thunk Action Creator)
export const getArtistAlbums = (artistID) => {
    return async (dispatch) => {
        try {
            const albums = await AlbumAPI.getArtistAlbums(artistID);
            dispatch(receiveAlbums(albums));
        }
        catch (e) {
            console.log(e);
        }
    };
};

//Return a function (Thunk Action Creator)
export const getAlbum = (albumID) => {
    return async (dispatch) => {
        try {
            const album = await AlbumAPI.getAlbum(albumID);
            dispatch(receiveAlbum(album));
        }
        catch (e) {
            console.log(e);
        }
    };
};