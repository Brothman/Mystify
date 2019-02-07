import axios from 'axios';

export const getAlbumTracks = (albumID) => {
    return axios.get(`/api/tracks/album/${albumID}`);
};

export const getArtistTracks = (artistID) => {
    return axios.get(`/api/tracks/artist/${artistID}`);
};