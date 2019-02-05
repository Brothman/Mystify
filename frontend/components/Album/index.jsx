import React from 'react';
import { getAlbum } from '../../utils/albumAPI';
import Sidebar from '../shared/sidebar/index.jsx';
import { getAlbumTracks } from '../../utils/trackAPI';
import Track from '../shared/track/index';
import { Link } from 'react-router-dom';

export default class Album extends React.Component {

    constructor(props) {
        super(props)
        this.state = { album: {}, tracks: [] };
    }

    async componentDidMount(){
        // const id = this.props.match.params.id;
        const id ="5c5a13775f26719a0b387be3";
        let album = await getAlbum(id);
        album = album.data;

        let tracks = await getAlbumTracks(album._id);
        tracks = tracks.data;

        this.setState({ album, tracks });
    }

    createTracks = () => {
        return this.state.tracks.map((track, idx) => {
            // return <h1>{track.title}</h1>
            return <Track title={track.title} trackURL={track.trackURL} trackLength={track.trackLength} />
        });
    }

    render() {
        //don't show outlines of img as data will be fetched quickly
        return (
            <div className="album">
                { !this.state.album.title ? null :
                    <React.Fragment>
                        <Sidebar />
                        <div className="album__information">
                            <img src={this.state.album.imageURL} className="album__cover" />
                            <p className="album__title">{this.state.album.title}</p>
                            {!this.state.album.artist ? null: 
                                <Link to={`/artist/${this.state.album.artist._id}`} className="album__artist">
                                    {this.state.album.artist.name}
                                </Link> 
                            }
                            <p className="album__song-count"> {this.state.tracks.length} SONG(S)</p>
                        </div>

                        <div className="album__tracks">
                            {this.createTracks()}
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
};

