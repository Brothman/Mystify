import axios from 'axios';

export const getArtists = () => {
    return axios.get("/api/artists");
};

export const getArtist = (id) => {
    return axios.get(`/api/artists/${id}`);
};