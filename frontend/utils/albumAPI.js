import axios from 'axios';

export const getAlbum = (id) => {
    return axios.get(`/api/albums/${id}`);
};

export const getAlbums = () => {
    return axios.get(`/api/albums/`);
};

export const getArtistAlbums = (artistID) => {
    return axios.get(`/api/albums/artist/${artistID}`);
};