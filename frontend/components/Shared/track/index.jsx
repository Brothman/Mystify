import React from 'react';
import { connect } from 'react-redux';
import { playSong, addSongToPlayQueue, addSongToNewPlayQueue } from '../../../actions/songActions';
import { replacePlayQueue } from '../../../actions/playQueueActions';
import { showPlayButton } from '../../../utils/editTheDOM';
import { addPlayThisSong } from '../../../utils/songFunctions';


class Track extends React.Component {

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

        const newSong = { title, albumImgURL, artist, albumID, song }

        this.setState({ song: newSong });
    }

    //only return true if both playQueues have the same songs.
    checkPlayQueuesEquality = (newPlayQueue, oldPlayQueue) => {
        //new and old playQueue in reality
        if (newPlayQueue.length !== oldPlayQueue.length) {
            return false;
        }
        else {
            for(let i = 0; i < newPlayQueue.length; i++) {
                if (newPlayQueue[i].title !== oldPlayQueue[i].title) {
                    return false;
                }
            }
            return true;
        }
    }

    render() {
        const title = this.props.title;
        const trackLength = this.props.trackLength;

        //CHECK TO SEE IF this.props.song.title matches the title AND it is not paused. If so, render a different style
        
        return (
            <div className={`track song-${title}`} onClick={() => this.props.playThisSong(true, this.state.song)}>
                <svg className="track__icon-play" viewBox="0 0 85 100"><path fill={this.props.song.title == title ? "#1db954" : "currentColor"} d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"><title>PLAY</title></path></svg>
                <p className={this.props.song.title == title ? "track__title track--green" : "track__title"}> {title}</p>
                <p className={this.props.song.title == title ? "track__track-length track--green" : "track__track-length"}> {trackLength}</p>
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
        replacePlayQueue: (newPlayQueue) => dispatch(replacePlayQueue(newPlayQueue)),
        addSongToNewPlayQueue: (song) => dispatch(addSongToNewPlayQueue(song)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addPlayThisSong(Track));