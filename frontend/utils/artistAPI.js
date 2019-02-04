import axios from 'axios';

export const getArtists = () => {
    return axios.get("/api/artists");
};