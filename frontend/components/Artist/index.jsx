import React from 'react';
import Sidebar from '../shared/sidebar/index.jsx';
import Track from '../shared/track/index';
import { Link, NavLink } from 'react-router-dom';

import { getArtistTracks, clearTracks } from '../../actions/trackActions.js';
import { getArtistAlbums } from '../../actions/albumActions';
import { getArtist } from '../../actions/artistActions';
import { playSong } from '../../actions/songActions';
import { clearPlayQueue, clearNewPlayQueue } from '../../actions/playQueueActions.js';
import { connect } from 'react-redux';

class ArtistPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = { };
    }

    componentWillMount() {
        // this.props.clearPlayQueue();
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        this.props.getArtistTracks(id);
        this.props.getArtistAlbums(id);
        this.props.getArtist(id);
        // There is a RACE CONDITION HERE. -> If I get the Artist too soon, the application will crash as I try to access tracks and albums information
        // ALSO, FOOTER RELIES ON THIS INFORMATION
    }

    componentWillUnmount(){
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
                key={idx} />
        });
    }

    createAlbums = () => {
        return this.props.albums.map((album, idx) => {
            return (
                <div className="artist__album" key={idx}>
                    <div className="artist__album-img-and-title">
                        <Link className="artist__album-img" to={`/album/${album._id}`}> 
                            <img className="artist__album-img" src={album.imageURL} />
                            <div className="artist__play-button">
                                <svg viewBox="0 0 300 300" className="svg-play"><circle cx="150" cy="150" r="100" strokeWidth="3"></circle><path d="M 110 95 L 110 205 Q 110 210 116 209 L 208 153 Q 210 150 208 147 L 116 92 Q 110 90 110 95 Z" strokeWidth="3"></path></svg>
                            </div>
                            <div className="artist-page__black-layer" />
                        </Link>
                        <Link to={`/album/${album._id}`} className="artist__album-title">{album.title}</Link>
                    </div>

                    <Link to={`/artist/${this.props.artist._id}`} className="artist__album-artist">{this.props.artist.name}</Link>
                </div>
            );
        });
    }

    playAlbumSong = () => {
        //checks if we have a song, as well as if it we are on a new artist's page from the current song
        if (!this.props.song.song) {
            if (this.props.newPlayQueue.length > 0) {
                this.props.playSong(this.props.newPlayQueue[0]);
            }
            else {
                this.props.playSong(this.props.playQueue[0]);
            }
        }
        else {
            if (this.props.newPlayQueue.length > 0) {
                if (this.props.newPlayQueue[0].artist.name !== this.props.song.artist.name ) {
                    this.props.playSong(this.props.newPlayQueue[0]);
                }
                else {
                    this.props.playSong(null);
                }
            }
            else {
                if (this.props.playQueue[0].artist.name !== this.props.song.artist.name) {
                    this.props.playSong(this.props.playQueue[0]);
                }
                else {
                    this.props.playSong(null);
                }
            }
        }
    };

    render() {
        //don't show outlines of img as data will be fetched quickly
        return (
            <div className="artist-page">
                <Sidebar />
                {(!this.props.artist.name || !this.props.albums[0] || !this.props.tracks[0]) ? null :
                    (this.props.artist._id !== this.props.match.params.id) ? null :
                            <React.Fragment>

                                    <h1 className="artist-page__name">{this.props.artist.name}</h1>
                                    <button onClick={this.playAlbumSong} className="play-button">Play</button>

                                    <div className="artist__nav-links">
                                        <NavLink exact={true} activeStyle={{ opacity: '1', borderBottom: '1px solid white' }} to={`/artist/${this.props.artist._id}`} className="artist__overview">OVERVIEW</NavLink>
                                        <NavLink activeStyle={{ opacity: '1', borderBottom: '1px solid white' }} to={`/artist/${this.props.artist._id}/about`} className="artist__about">ABOUT</NavLink>
                                    </div>

                                {(window.location.href.slice(-5) == 'about') ? 
                                    <div className="artist__about-container">
                                        <p className="artist__about-container-title">Biography</p>
                                        <p className="artist__about-container-body">{this.props.artist.bio}</p>
                                    </div>
                                    :
                                    <React.Fragment>
                                        <h3 className="artist__albums-header">Albums</h3>
                                        <div className="artist__albums">
                                            {this.createAlbums()}
                                        </div>

                                        <h3 className="artist__tracks-header">Tracks</h3>
                                        <div className="artist__tracks">
                                            {this.createTracks()}
                                        </div>
                                    </React.Fragment>
                                }

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
        albums: entities.albums,
        artist: entities.artist,
        song: entities.song,
        playQueue: entities.playQueue,
        newPlayQueue: entities.newPlayQueue,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getArtistTracks: (artistID) => dispatch(getArtistTracks(artistID)),
        getArtistAlbums: (artistID) => dispatch(getArtistAlbums(artistID)),
        getArtist: (artistID) => dispatch(getArtist(artistID)),
        playSong: (song) => dispatch(playSong(song)),
        clearTracks: () => dispatch(clearTracks()),
        clearPlayQueue: () => dispatch(clearPlayQueue()),
        clearNewPlayQueue: () => dispatch(clearNewPlayQueue()),
    };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
