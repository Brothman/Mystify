import React from 'react';
import { connect } from 'react-redux';
import { playSong, addSongToPlayQueue } from '../../../actions/songActions';


class track extends React.Component {

    constructor(props) {
        super(props)
        this.state = { song: null };
    }

    componentDidMount() {
        //add to playQUEUE
        console.log('hi')
        const title = this.props.title;
        const trackURL = this.props.trackURL;
        const trackLength = this.props.trackLength;
        const playSong = this.props.playSong;
        const albumImgURL = this.props.albumImgURL;

        const song = { title, albumImgURL, song: new Audio(trackURL) }
        this.props.addSongToPlayQueue(song);

        this.setState({ song });
    }

    playThisSong = (song) => {
        let idx;

        for (let i = 0; i < this.props.playQueue.length; i++) {
            if (this.props.playQueue[i].title == song.title) {
                idx = i;
            }
        }

        if (idx == this.props.playQueue.length - 1) {
            //do nothing, last song
        }
        else {
            song.song.addEventListener('ended', () => {
                this.playThisSong(this.props.playQueue[idx + 1]);
            })
        }

        this.props.playSong(song);
    }

    render() {
        const title = this.props.title;
        const trackLength = this.props.trackLength;

        //CHECK TO SEE IF this.props.song.title matches the title AND it is not paused. If so, render a different style
        
        return (
            <div className={`track song-${title}`} onClick={() => this.playThisSong(this.state.song)}>
                <svg className="track__icon-play" viewBox="0 0 85 100"><path fill={this.props.song.title == title ? "green" : "currentColor"} d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"><title>PLAY</title></path></svg>
                <p className={this.props.song.title == title ? "track__title track--green" : "track__title"}> {title}</p>
                <p className={this.props.song.title == title ? "track__track-length track--green" : "track__track-length"}> {trackLength}</p>
            </div>
        );
    }
};

const mapStateToProps = ({ entities }) => {
    return {
        playQueue: entities.playQueue,
        song: entities.song,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        playSong: (song) => dispatch(playSong(song)),
        addSongToPlayQueue: (song) => dispatch(addSongToPlayQueue(song)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(track);