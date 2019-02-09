import React from 'react';
// import { getAlbum } from '../../utils/albumAPI';
import Sidebar from '../shared/sidebar/index.jsx';
// import { getAlbumTracks } from '../../utils/trackAPI';
import Track from '../shared/track/index';
import { Link } from 'react-router-dom';

import { getAlbumTracks } from '../../actions/trackActions.js';
import { getAlbum } from '../../actions/albumActions';
import { connect } from 'react-redux';


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

    playMusic = (trackURL) => {
        const song = this.state.song;
        if (!song) {
            const newSong = new Audio(trackURL);
            this.setState({ song: newSong, playing: true }, () => {
                console.log('hi')
                console.log(this.state);
            });
            newSong.play();
        }
        else if (song.src == trackURL && this.state.playing) {
            song.pause();
            this.setState({ playing: false })
        }
        else if (song.src == trackURL) {
            song.play();
            this.setState({ playing: true })
        }
        else {
            song.pause();
            const newSong = new Audio(trackURL);
            newSong.play();
            this.setState({ song: newSong, playing: true });
        }
    }

    createTracks = () => {
        return this.props.tracks.map((track, idx) => {
            return <Track title={track.title} t
                          trackURL={track.trackURL} 
                          trackLength={track.trackLength}
                          playMusic={this.playMusic}
                          key={idx} />
        });
    }

    render() {
        //don't show outlines of img as data will be fetched quickly
        return (
            <div className="album">
                <Sidebar />
                { (!this.props.album.title || !this.props.tracks.length >= 1) ? null :
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
        album: entities.albums,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAlbum: (albumID) => dispatch(getAlbum(albumID)),
        getAlbumTracks: (albumID) => dispatch(getAlbumTracks(albumID)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);

