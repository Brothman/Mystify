import React from 'react';
import { connect } from 'react-redux';
import { playSong, addSongToPlayQueue, addSongToNewPlayQueue } from '../../../actions/songActions';
import { clearTracks } from '../../../actions/trackActions';
import { replacePlayQueue } from '../../../actions/playQueueActions';

import { Link } from 'react-router-dom';
import { showPlayButton } from '../../../utils/editTheDOM';
import { addPlayThisSong } from '../../../utils/songFunctions';

class HomeTrack extends React.Component {

    constructor(props) {
        super(props)
        this.state = { song: null };
    }

    componentDidMount() {
        //add to playQUEUE
        const title = this.props.title;
        const trackURL = this.props.trackURL;
        const albumImgURL = this.props.album.imageURL;
        const albumID = this.props.album._id;
        const artist = this.props.artist;
        const song = trackURL;

        const newSong = { title, albumImgURL, albumID, artist, song }

        this.setState({ song: newSong });
    }

    componentWillUnmount(){
        // this.props.clearPlayQueue();
        // this.props.clearTracks();
    }

    render() {
        const title = this.props.title;
        const trackLength = this.props.trackLength;
        const artistName = this.props.artist.name;
        const albumTitle = this.props.album.title;

        //CHECK TO SEE IF this.props.song.title matches the title AND it is not paused. If so, render a different style
        return (
            <div onClick={() => this.props.playThisSong(true, this.state.song)} className={`track-home song-${title}`} >
                <svg className="home-track__icon-play" viewBox="0 0 85 100"><path fill={this.props.song.title == title ? "#1db954" : "currentColor"} d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"><title>PLAY</title></path></svg>
                <div className="home-track__info">
                    <p className={this.props.song.title == title ? "home-track__title track--green" : "home-track__title"}> {title}</p>
                    <div className="home-track__artist-album">
                        <Link onClick={(e) => e.stopPropagation()} to={`/artist/${this.props.artist._id}`} className={this.props.song.title == title ? "home-track__artist-name track--green" : "home-track__artist-name"}> {artistName}</Link>
                        <Link onClick={(e) => e.stopPropagation()} to={`/album/${this.props.album._id}`} className={this.props.song.title == title ? "home-track__album-title track--green" : "home-track__album-title"}> {albumTitle}</Link>
                    </div>
                </div>
                <p className={this.props.song.title == title ? "home-track__track-length track--green" : "home-track__track-length"}> {trackLength}</p>
            </div>
        );
    }
};

const mapStateToProps = ({ entities }) => {
    return {
        playQueue: entities.playQueue,
        newPlayQueue: entities.newPlayQueue,
        song: entities.song,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        playSong: (song) => dispatch(playSong(song)),
        addSongToPlayQueue: (song) => dispatch(addSongToPlayQueue(song)),
        clearTracks: () => dispatch(clearTracks()),
        addSongToNewPlayQueue: (song) => dispatch(addSongToNewPlayQueue(song)),
        replacePlayQueue: (newPlayQueue) => dispatch(replacePlayQueue(newPlayQueue)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addPlayThisSong(HomeTrack));