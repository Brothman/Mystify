import React from 'react';
import { connect } from 'react-redux';
import { playSong, addSongToPlayQueue, addSongToNewPlayQueue } from '../../../actions/songActions';
import { replacePlayQueue } from '../../../actions/playQueueActions';


class track extends React.Component {

    constructor(props) {
        super(props)
        this.state = { song: null };
    }

    componentDidMount() {
        //add to playQUEUE
        const title = this.props.title;
        const trackURL = this.props.trackURL;
        const albumImgURL = this.props.albumImgURL;
        const artist = this.props.artist;

        const song = { title, albumImgURL, artist, song: new Audio(trackURL) }
        // this.props.addSongToPlayQueue(song);
        this.props.addSongToNewPlayQueue(song);

        this.setState({ song });
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

    playThisSong = (clicked, song) => {
        let idx = 0;

        //Nothing is on the backburner yet, first time playing a song, or clicked
        //actually could just be clicked?
        if (this.props.playQueue.length == 0 || clicked) {
            const newPlayQueue = this.props.newPlayQueue;
            for (let i = 0; i < newPlayQueue.length; i++) {
                if (newPlayQueue[i].title == song.title) {
                    idx = i;
                }
            }
            if (idx == newPlayQueue.length - 1) { }
            else {
                song.song.addEventListener('ended', () => {
                    //need for loop to find idx
                    this.playThisSong(false, newPlayQueue[idx + 1]);
                });
            }
            this.props.replacePlayQueue(newPlayQueue);
        }
        else {
            const playQueue = this.props.playQueue;
            for (let i = 0; i < playQueue.length; i++) {
                if (playQueue[i].title == song.title) {
                    idx = i;
                }
            }

            if (idx == playQueue.length - 1) {
                //do nothing, last song
            }
            else {
                song.song.addEventListener('ended', () => {
                    this.playThisSong(false, playQueue[idx + 1]);
                })
            }
        }

        this.props.playSong(song);
    }

    render() {
        const title = this.props.title;
        const trackLength = this.props.trackLength;

        //CHECK TO SEE IF this.props.song.title matches the title AND it is not paused. If so, render a different style
        
        return (
            <div className={`track song-${title}`} onClick={() => this.playThisSong(true, this.state.song)}>
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

export default connect(mapStateToProps, mapDispatchToProps)(track);