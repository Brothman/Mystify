// @ts-check

import React from 'react';
import Sidebar from '../../Shared/sidebar/index.jsx';
import HomeTrack from '../../Shared/homeTrack/index.jsx';
import Header from '../header/index';
import { getAllTracks, clearTracks } from '../../../actions/trackActions';
import { clearPlayQueue } from '../../../actions/playQueueActions.js';
import { addSongToPlayQueue } from '../../../actions/songActions';
import { connect } from 'react-redux';

class HomeTracks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.clearPlayQueue();
    }

    componentDidMount() {
        this.props.getAllTracks();
    }

    componentWillUnmount(){
        this.props.clearTracks();
    }

    createTracks = () => {
        return this.props.tracks.map((track, idx) => {
            return <HomeTrack title={track.title}
                trackURL={track.trackURL}
                trackLength={track.trackLength}
                album={track.album}
                album={track.album}
                artist={track.artist}
                createAudioAPI={(song) => this.createAudioAPI(song)}
                key={idx} />
        });
    }

    createAudioAPI = (clickedSong) => {
        let chosenSong;

        this.props.clearPlayQueue();

        this.props.tracks.forEach(track => {
            const title = track.title;
            const trackURL = track.trackURL;
            const albumImgURL = track.album.imageURL;
            const albumID = track.album._id;
            const artist = track.artist;
            const song = new Audio(trackURL);

            const newSong = { title, albumImgURL, albumID, artist, song }
            if (trackURL == clickedSong.song) {
                chosenSong = newSong;
            }
            this.props.addSongToPlayQueue(newSong);
        });

        return chosenSong;
    }

    render() {
        return (
            <div className="home-track">
                <Sidebar />
                <Header />
                {(!this.props.tracks.length >= 1) ? null :
                    <React.Fragment>
                        <div className="home-track__tracks">
                            {this.createTracks()}
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

//destruct entities out of state
const mapStateToProps = ({ entities }) => {
    return {
        tracks: entities.tracks,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllTracks: () => dispatch(getAllTracks()),
        clearTracks: () => dispatch(clearTracks()),
        clearPlayQueue: () => dispatch(clearPlayQueue()),
        addSongToPlayQueue: (song) => dispatch(addSongToPlayQueue(song)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTracks);

