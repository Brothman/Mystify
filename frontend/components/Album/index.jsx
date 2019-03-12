import React from 'react';
import Sidebar from '../Shared/sidebar/index.jsx';
import Track from '../Shared/track/index';

import { Link } from 'react-router-dom';

import { getAlbumTracks, clearTracks } from '../../actions/trackActions.js';
import { clearPlayQueue, clearNewPlayQueue } from '../../actions/playQueueActions.js';
import { getAlbum } from '../../actions/albumActions';
import { addSongToPlayQueue } from '../../actions/songActions';
import { connect } from 'react-redux';

// import { createAudioAPI } from '../../utils/songMethods';
import { addAudioAPI } from '../../utils/songFunctions';

class Album extends React.Component {

    constructor(props) {
        super(props)
        this.state = { album: {}, tracks: [], song: null, playing: false };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getAlbum(id);
        this.props.getAlbumTracks(id);
    }

    componentWillUnmount() {
        this.props.clearTracks();
        this.props.clearNewPlayQueue();
    }

    createTracks = () => {
        return this.props.tracks.map((track, idx) => {
            return <Track title={track.title} 
                          trackURL={track.trackURL} 
                          trackLength={track.trackLength}
                          album={track.album}
                          artist={track.artist}
                          createAudioAPI={(song) => this.props.createAudioAPI(song)}
                          key={idx} />
        });
    }

    render() {
        let album = this.props.album;
        //in case album is undefined, make it an array
        if (!album) {
            album = [];
        }
        return (
            <div className="album">
                <Sidebar />
                { (!album.title || !this.props.tracks.length >= 1) ? null :
                    (this.props.album._id !== this.props.match.params.id) ? null :
                        <React.Fragment>
                        
                            <div className="album__information">
                                <img src={this.props.album.imageURL} className="album__cover" />
                                <p className="album__title">{this.props.album.title}</p>
                                {!this.props.album.artist ? null: 
                                    <Link to={`/artist/${this.props.album.artist._id}`} className="album__artist">
                                        {this.props.album.artist.name}
                                    </Link> 
                                }
                                <p className="album__song-count">{this.props.tracks.length == 1 ? 
                                                                    this.props.tracks.length + ' SONG':
                                                                    this.props.tracks.length + ' SONGS'}</p>
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

//destruct entities out of state
const mapStateToProps = ({ entities }) => {
    return {
        tracks: entities.tracks,
        album: entities.albums[0],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAlbum: (albumID) => dispatch(getAlbum(albumID)),
        getAlbumTracks: (albumID) => dispatch(getAlbumTracks(albumID)),
        clearTracks: () => dispatch(clearTracks()),
        clearPlayQueue: () => dispatch(clearPlayQueue()),
        clearNewPlayQueue: () => dispatch(clearNewPlayQueue()),
        addSongToPlayQueue: (song) => dispatch(addSongToPlayQueue(song)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(addAudioAPI(Album));

