import React from 'react';
import { getAlbum } from '../../utils/albumAPI';

export default class Album extends React.Component {

    constructor(props) {
        super(props)
        this.state = { album: {} };
    }

    async componentDidMount(){
        let album = await getAlbum(id);
        album = album.data;
        this.setState({ album });
    }

    render() {
        return (
            
        );
    }
};