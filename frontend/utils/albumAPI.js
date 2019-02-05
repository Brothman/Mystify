import axios from 'axios';

export const getAlbum = (id) => {
    return axios.get("/api/albums/id");
};