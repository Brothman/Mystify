import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { replacePlayQueue } from '../../../actions/playQueueActions';
import { addSongToPlayQueue } from '../../../actions/songActions';
import { playSong, addSongToNewPlayQueue } from '../../../actions/songActions.js';


class Artist extends React.Component {

    constructor(props) {
        super(props)
        this.state = { };
    }

    playArtistSong = (e) => {
        e.preventDefault();

        const newSongs = [];

        this.props.tracks.forEach(track => {
            const title = track.title;
            const trackURL = track.trackURL;
            const albumImgURL = track.album.imageURL;
            const albumID = track.album._id;
            const artist = track.artist;
            const song = new Audio(trackURL);

            const newSong = { title, albumImgURL, albumID, artist, song }
            newSongs.push(newSong);
            this.props.addSongToPlayQueue(newSong);
        });

        this.playThisSong(null, newSongs[0]);
    }

    playThisSong = (clicked, song) => {
        let idx = 0;

        //handle what happens if someone clicks play or pause on the song

        const playQueue = this.props.playQueue;
        for (let i = 0; i < playQueue.length; i++) {
            if (playQueue[i].title == song.title) {
                idx = i;
            }
        }

        if (idx == playQueue.length - 1) {
            //make the button turn to pause
            song.song.addEventListener('ended', () => {
                showPlayButton();
            });
        }
        else {
            song.song.addEventListener('ended', () => {
                this.playThisSong(false, playQueue[idx + 1]);
            })
        }

        this.props.playSong(song);
    }

    render() {
        const imageUrl = this.props.imageUrl;
        const name = this.props.name;
        const id = this.props.id;

        return (
            <div className="artist">
                <Link className="artist__photo-play" to={`/artist/${id}`}>
                    <img src={imageUrl} alt="" className="artist__photo" />
                    <div onClick={e => this.playArtistSong(e)} className="artist__play-button">
                        <svg viewBox="0 0 300 300" className="svg-play">
                            <circle cx="150" cy="150" r="100" strokeWidth="3"></circle>
                            <path d="M 110 95 L 110 205 Q 110 210 116 209 L 208 153 Q 210 150 208 147 L 116 92 Q 110 90 110 95 Z" strokeWidth="3"></path>
                        </svg>
                    </div>
                    <div className="artist__black-layer" />
                </Link>
                <p className="artist__name"> {name} </p>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);




//TODO say hello

//BUG fix me

//BUG df

//FIXME please

//TODO Hi

//Write Console.log snippet
