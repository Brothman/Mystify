import React from 'react';
// import { getAlbum } from '../../utils/albumAPI';
import Sidebar from '../shared/sidebar/index.jsx';
// import { getArtistTracks } from '../../utils/trackAPI';
// import { getArtistAlbums } from '../../utils/albumAPI';
// import { getArtist } from '../../utils/artistAPI';
import Track from '../shared/track/index';
import { Link } from 'react-router-dom';

import { getArtistTracks } from '../../actions/trackActions.js';
import { getArtistAlbums } from '../../actions/albumActions';
import { getArtist } from '../../actions/artistActions';
import { playSong, updateSongCurrentTime } from '../../actions/songActions';
import { connect } from 'react-redux';
// import Artist from '../shared/artist';

class ArtistPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            song: null, 
            playing: false,
            volume: 1,
            time: 0,
            input: null
        };
        this.playMusic = this.playMusic.bind(this);
    }

    async componentDidMount() {
        const id = this.props.match.params.id;

        this.props.getArtistTracks(id);
        this.props.getArtistAlbums(id);
        this.props.getArtist(id);
        // There is a RACE CONDITION HERE. -> If I get the Artist too soon, the application will crash as I try to access tracks and albums information
    }

    updateTimeInState = (newSong) => {
        // const time = newSong.currentTime;
        // // debugger

        // const input = this.state.input || document.querySelector('.audio-player__time-slider');

        // const min = input.min,
        //     max = input.max,
        //     val = input.value;

        // const realVal = (val - min) / max - min;

        // this.setState({ time, input });
        // input.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
        //     + 'color-stop(' + realVal + ', #aaa), '
        //     + 'color-stop(' + realVal + ', #404040)'
        //     + ')';

    } 

    playMusic = (newSong) => {
        // debugger
        //newSong.volume to change volume

        // const tracks = document.getElementsByClassName('')


        const song = this.state.song;
        const playing = this.state.playing;

        //done for the fixed playbar on bottom of screen
        
        if (!newSong && !song) { 
            return; 
        };

        if (!newSong && song && playing ) {
            song.pause();
            this.setState({ playing: false });

            const play = document.querySelector('.play');
            const pause = document.querySelector('.pause');
            play.style.display = "inline";
            pause.style.display = "none";
        }
        else if (!newSong && song && !playing ) {
            song.play();            
            this.setState({ playing: true })

            const play = document.querySelector('.play');
            const pause = document.querySelector('.pause');
            play.style.display = "none";
            pause.style.display = "inline";
        }
        else if (!song) {
            // const newSong = new Audio(newSong);

            this.setState({ song: newSong, playing: true }, () => {
                console.log(this.state);
            });
            console.log(newSong)
            const input = document.querySelector('.audio-player__time-slider');
            input.max = newSong.duration;

            const play = document.querySelector('.play');
            const pause = document.querySelector('.pause');
            play.style.display="none";
            pause.style.display="inline";

            newSong.addEventListener('timeupdate', () => this.updateTimeInState(newSong));
            newSong.play();
        }
        else if (song.src == newSong.src && this.state.playing) {
            song.pause();
            this.setState({ playing: false })

            const play = document.querySelector('.play');
            const pause = document.querySelector('.pause');
            play.style.display = "inline";
            pause.style.display = "none";
        }
        else if (song.src == newSong.src) {
            song.play();
            this.setState({ playing: true })

            const play = document.querySelector('.play');
            const pause = document.querySelector('.pause');
            play.style.display = "none";
            pause.style.display = "inline";
        }
        else {
            song.pause();
            newSong.play();
            this.setState({ song: newSong, playing: true });
        }
    }

    updateVolume = (e) => {
        const volume = e.target.value;
        this.state.song ? this.state.song.volume = volume : null;
        // this.setState({ volume });
    }

    updateCurrentTime = (e) => {
        //fill in
        // debugger
        const min = e.target.min,
            max = e.target.max,
            val = e.target.value;

        const realVal = (val - min) / max - min;

        const input= e.target;

        // this.props.song.removeEventListener('timeupdate', () => updateTimeInState(this.props.song, input));
        this.props.updateSongCurrentTime(val);
        // this.props.song.currentTime = realVal;
        
        input.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
            + 'color-stop(' + realVal + ', #aaa), '
            + 'color-stop(' + realVal + ', #404040)'
            + ')';

    }

    createTracks = () => {
        return this.props.tracks.map((track, idx) => {
            return <Track title={track.title} 
                trackURL={track.trackURL}
                trackLength={track.trackLength}
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

    formatTime = (time) => {
        // Display formatted time
        debugger
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        // return;
        if (seconds < 10) {
            return `${minutes}:0${seconds}`;
        }
        else {
            return `${minutes}:${seconds}`;
        }
    }

    turnTimeIntoFloat = (time) => {
        const hoursMinutes = time.split(/[.:]/);
        const hours = parseInt(hoursMinutes[0], 10);
        const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
        return (hours + minutes) / 60;
    }

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
                            
                            <div className="audio-player">
                                <div className="audio-player__song-info">
                                    <img src={this.props.albums[0].imageURL} alt="" className="audio-player__album-img"/>
                                    <p className="audio-player__song-title">{this.props.tracks[0].title}</p>
                                    <p className="audio-player__artist-name">{this.props.artist.name}</p>
                                </div>

                                <div className="audio-player__controls">
                                    <svg viewBox="0 0 610 610" className="rela-block svg arrows"><path d="M 405 230 L 405 270 L 450 250 L 405 230 Z" strokeWidth="10" className="arrow"></path><path d="M 390 250 L 350 250 L 250 350 L 210 350" strokeWidth="15"></path><path d="M 390 350 L 350 350 330 330" strokeWidth="15"></path><path d="M 210 250 L 250 250 270 270" strokeWidth="15"></path><path d="M 405 330 L 405 370 L 450 350 L 405 330 Z" strokeWidth="10" className="arrow"></path></svg>
                                    <svg viewBox="0 0 500 500" className="rela-block svg player"><path d="M 290 205 L 290 295 Q 290 300 284 299 L 197 253 Q 195 250 197 247 L 284 202 Q 290 200 290 205 Z" strokeWidth="0"></path><rect x="165" y="205" width="25" height="90" rx="8" ry="8" strokeWidth="0"></rect></svg>
                                    <svg onClick={ () => this.props.playSong( null ) } viewBox="0 0 300 300" className="rela-block svg play-pause play">
                                        <circle cx="150" cy="150" r="100"></circle><path d="M 115 105 L 115 195 Q 115 200 121 199 L 203 153 Q 205 150 203 147 L 121 102 Q 115 100 115 105 Z" strokeWidth="0"></path>
                                    </svg>
                                    <svg onClick={ () => this.props.playSong( null ) } viewBox="0 0 300 300" className="rela-block svg play-pause pause">
                                        <circle cx="150" cy="150" r="100"></circle>
                                        <rect x="109" y="105" width="25" height="90" rx="8" ry="8" strokeWidth="0"></rect>
                                        <rect x="166" y="105" width="25" height="90" rx="8" ry="8" strokeWidth="0"></rect>
                                    </svg>
                                    <svg viewBox="0 0 500 500" className="rela-block svg player"><path d="M 215 205 L 215 295 Q 215 300 221 299 L 303 253 Q 305 250 303 247 L 221 202 Q 215 200 215 205 Z" strokeWidth="0"></path><rect x="310" y="205" width="25" height="90" rx="8" ry="8" strokeWidth="0"></rect></svg>
                                    <svg viewBox="0 0 600 600" className="rela-block svg arrows"><path d="M 210 310 Q 210 250 270 250 L 310 250" strokeWidth="15"></path><path d="M 325 230 L 325 270 L 370 250 L 325 230 Z" strokeWidth="10" className="arrow"></path><path d="M 390 290 Q 390 350 330 350 L 290 350" strokeWidth="15"></path><path d="M 275 330 L 275 370 L 230 350 L 275 330 Z" strokeWidth="10" className="arrow"></path></svg>

                                    <div className="audio-player__current-time">
                                        <p className="audio-player__time">{(this.props.song.currentTime ? this.formatTime(this.props.song.currentTime) : '0:00'}</p>
                                        <input onChange={(e) => this.updateCurrentTime(e)}
                                            type="range"
                                            min="0"
                                            max={this.props.song.duration ? this.props.song.duration : 250 }
                                            step="0.01"
                                            value={this.props.song.currentTime ? this.props.song.currentTime : 0 }
                                            className="audio-player__time-slider"/>
                                        <p className="audio-player__time">{this.props.song.duration ? this.formatTime(this.props.song.duration) : this.props.tracks[0].trackLength}</p>
                                    </div>
                                </div>

                                <div className="audio-player__play-queue">
                                </div>

                                <div className="audio-player__mute-sound">
                                </div>

                                <div className="audio-player__volume-slider">
                                    <input onChange={(e) => this.updateVolume(e)} 
                                        type="range" 
                                        min="0" 
                                        max="1" 
                                        step="0.01" 
                                        className="audio-player__volume-input"/>
                                </div>

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
    };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);

