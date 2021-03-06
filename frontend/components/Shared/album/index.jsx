import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearPlayQueue } from '../../../actions/playQueueActions';
import { addSongToPlayQueue } from '../../../actions/songActions';
import { playSong, addSongToNewPlayQueue } from '../../../actions/songActions.js';
import { addPlayThisSong } from '../../../utils/songFunctions';

class Album extends React.Component {

    constructor(props) {
        super(props)
        this.state = { };
    }

    playArtistSong = (e) => {
        e.preventDefault();

        const newSongs = [];

        this.props.clearPlayQueue();

        this.props.tracks.forEach(track => {
            const title = track.title;
            const trackURL = track.trackURL;
            const albumImgURL = track.album.imageURL;
            const albumID = track.album._id;
            const artist = track.artist;
            // const song = new Audio(trackURL);
            const song = new Audio();
            // song.preload = 'metadata';
            song.preload = 'none';
            song.src = trackURL;

            const newSong = { title, albumImgURL, albumID, artist, song }
            newSongs.push(newSong);
            this.props.addSongToPlayQueue(newSong);
        });

        //using setTimeout to put this on the asynchronous stack, so playQueue updates first
        setTimeout(() => this.props.playThisSong(null, newSongs[0]), 0);
    }

    render() {
        const album = this.props.album;
        return (
            <div className="artist__album" >
                <div className="artist__album-img-and-title">
                    <Link className="artist__album-img" to={`/album/${album._id}`}>
                        <img className="artist__album-img" src={album.imageURL} />
                        <div onClick={e => this.playArtistSong(e)} className="artist__play-button">
                            <svg viewBox="0 0 300 300" className="svg-play"><circle cx="150" cy="150" r="100" strokeWidth="3"></circle><path d="M 110 95 L 110 205 Q 110 210 116 209 L 208 153 Q 210 150 208 147 L 116 92 Q 110 90 110 95 Z" strokeWidth="3"></path></svg>
                        </div>
                        <div className="artist-page__black-layer" />
                    </Link>
                    <Link to={`/album/${album._id}`} className="artist__album-title">{album.title}</Link>
                </div>

                <Link to={`/artist/${album.artist._id}`} className="artist__album-artist">{album.artist.name}</Link>
            </div>
        );
    }
};

//destruct entities out of state
const mapStateToProps = ({ entities }) => {
    return {
        playQueue: entities.playQueue,
        newPlayQueue: entities.newPlayQueue,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        replacePlayQueue: (newPlayQueue) => dispatch(replacePlayQueue(newPlayQueue)),
        addSongToPlayQueue: (song) => dispatch(addSongToPlayQueue(song)),
        playSong: (song) => dispatch(playSong(song)),
        addSongToNewPlayQueue: (song) => dispatch(addSongToNewPlayQueue(song)),
        clearPlayQueue: () => dispatch(clearPlayQueue()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(addPlayThisSong(Album));
