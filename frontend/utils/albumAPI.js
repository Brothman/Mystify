import axios from 'axios';

export const getAlbum = (id) => {
    return axios.get(`/api/albums/${id}`);
};

export const getArtistAlbums = (artistID) => {
    return axios.get(`/api/albums/artist/${artistID}`);
};