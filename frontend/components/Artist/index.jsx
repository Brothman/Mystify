import React from 'react';
import Sidebar from '../shared/sidebar/index.jsx';
import Track from '../shared/track/index';
import { Link } from 'react-router-dom';

import { getArtistTracks, clearTracks } from '../../actions/trackActions.js';
import { getArtistAlbums } from '../../actions/albumActions';
import { getArtist } from '../../actions/artistActions';
import { playSong, updateSongCurrentTime } from '../../actions/songActions';
import { connect } from 'react-redux';

class ArtistPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = { };
    }

    async componentDidMount() {
        const id = this.props.match.params.id;

        this.props.getArtistTracks(id);
        this.props.getArtistAlbums(id);
        this.props.getArtist(id);
        // There is a RACE CONDITION HERE. -> If I get the Artist too soon, the application will crash as I try to access tracks and albums information
        // ALSO, FOOTER RELIES ON THIS INFORMATION
    }

    componentWillUnmount(){
        this.props.clearTracks();
    }

    createTracks = () => {
        return this.props.tracks.map((track, idx) => {
            return <Track title={track.title} 
                trackURL={track.trackURL}
                trackLength={track.trackLength}
                albumImgURL={track.album.imageURL}
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

    playAlbumSong = (id) => {
        // let idx;

        // for (let i = 0; i < this.props.playQueue.length; i++) {
        //     if (this.props.playQueue[i].title == song.title) {
        //         idx = i;
        //     }
        // }

        // if (idx == this.props.playQueue.length - 1) {
        //     //do nothing, last song
        // }
        // else {
        //     song.song.addEventListener('ended', () => {
        //         this.playThisSong(this.props.playQueue[idx + 1]);
        //     })
        // }
        // this.props.playSong(song);
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
                            <button className="play-button">Play</button>

                            <div className="artist__nav-links">
                                <p className="artist__overview">OVERVIEW</p>
                                <p className="artist__about">ABOUT</p>
                            </div>
                            
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
        song: entities.song
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getArtistTracks: (artistID) => dispatch(getArtistTracks(artistID)),
        getArtistAlbums: (artistID) => dispatch(getArtistAlbums(artistID)),
        getArtist: (artistID) => dispatch(getArtist(artistID)),
        playSong: (song) => dispatch(playSong(song)),
        updateSongCurrentTime: (time) => dispatch(updateSongCurrentTime(time)),
        clearTracks: () => dispatch(clearTracks()),
    };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
