import axios from 'axios';

export const getAlbumTracks = (albumID) => {
    return axios.get(`/api/tracks/album/${albumID}`);
};