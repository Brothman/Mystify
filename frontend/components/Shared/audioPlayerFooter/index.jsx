import React from 'react';
import { connect } from 'react-redux';
import { playSong, updateSongCurrentTime } from '../../../actions/songActions';
import { Link } from 'react-router-dom';
import { showPlayButton } from '../../../utils/editTheDOM';


class AudioPlayerFooter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            tempTime: 0,
        };
    }

    updateVolume = (e) => {
        const volume = e.target.value;
        this.props.song ? this.props.song.volume = volume : null;
    }

    formatTime = (time) => {
        // Display formatted time
        // debugger
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

    updateCurrentTime = (e) => {
        //fail safe so user cannot edit progress bar before a song is selected
        if (!this.props.song.song) {
            return;
        }
        const min = e.target.min,
            max = e.target.max,
            val = e.target.value;

        this.setState({ tempTime: val });

        const realVal = (val - min) / max - min;

        const input = e.target;

        // this.props.song.removeEventListener('timeupdate', () => updateTimeInState(this.props.song, input));
        this.props.updateSongCurrentTime(val);
        // this.props.song.currentTime = realVal;

        input.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
            + 'color-stop(' + realVal + ', #aaa), '
            + 'color-stop(' + realVal + ', #404040)'
            + ')';

    }

    playNextSong = () => {
            const song = this.props.song;

            if (!song.song) {
                //break early if we haven't first selected a song
                return;
            }

            let idx = -1;
            const lastIndex = this.props.playQueue.length - 1;


            for (let i = 0; i < this.props.playQueue.length; i++) {
                if (this.props.playQueue[i].title == song.title) {
                    idx = i;
                }
            }

            //this is a hack because when I set currentTime to duration, I get a weird DOM error of 
            //Failed to load, no supported source found -> DOMPromiseRejection
            if (idx == lastIndex) {
                //go to end of song, last song
                song.song.pause();
                song.song.currentTime = song.song.duration - 0.1;
                showPlayButton();
            }
            else {
                const newSong = this.props.playQueue[idx + 1];
                if (idx !== lastIndex-1) {
                    newSong.song.addEventListener('ended', () => {
                        //need for loop to find idx
                        this.props.playSong(this.props.playQueue[idx + 2]);
                    });
                }
                
                this.props.playSong(newSong);
            }
    }

    loop = () => {
        const song = this.props.song.song;
        const arrowLoopSVG = document.querySelectorAll('.arrow');
        
        if (song.loop) {
            song.loop = false;  
            for (let i = 0; i < arrowLoopSVG.length; i++) {
                const arrow = arrowLoopSVG[i];
                // arrow.style.fill = 'rgba(255, 255, 255, 0.6)';
                arrow.style.className = 'arrow';
            }
        }
        else {
            song.loop = true;
            for (let i = 0; i < arrowLoopSVG.length; i++) {
                const arrow = arrowLoopSVG[i];
                // arrow.style.fill = '#1db954';
                debugger
                arrow.style.className += ' green';
            }
        }
    }

    restartOrPlayPreviousSong = () => {

        const song = this.props.song;
        if (!song.song) {
            //break early if we haven't first selected a song
            return;
        }

        if (song.song.currentTime <= 1) {
            let idx = -1;

            for (let i = 0; i < this.props.playQueue.length; i++) {
                if (this.props.playQueue[i].title == song.title) {
                    idx = i;
                }
            }

            if (idx == 0) {
                song.song.currentTime = 0;
            }
            else {
                const newSong = this.props.playQueue[idx - 1];
                if (idx !== 0) {
                    newSong.song.addEventListener('ended', () => {
                        //need for loop to find idx
                        this.props.playSong(this.props.playQueue[idx]);
                    });
                }
                this.props.playSong(newSong);
            }
        }
        else {
            song.song.currentTime = 0;
        }
    }

    render() {
        //for error handling
        const song = this.props.song.song ? this.props.song.song : this.props.song;
        return (
            <div className="audio-player">
                {(this.props.song.albumImgURL && this.props.song.title && this.props.song.artist) ?
                    <div className="audio-player__song-info">
                        <Link to={`/artist/${this.props.song.artist._id}`} className="audio-player__album-img">
                            <img src={this.props.song.albumImgURL} alt="" className="audio-player__album-img" /> 
                        </Link>
                        <p className="audio-player__song-title">{this.props.song.title}</p>
                        <Link to={`/artist/${this.props.song.artist._id}`} className="audio-player__artist-name">{this.props.song.artist.name}</Link>
                    </div>
                    : null
                }

                <div className="audio-player__controls">
                    <svg viewBox="0 0 610 610" className="rela-block svg shuffle"><path d="M 405 230 L 405 270 L 450 250 L 405 230 Z" strokeWidth="10" className="arrow"></path><path d="M 390 250 L 350 250 L 250 350 L 210 350" strokeWidth="15"></path><path d="M 390 350 L 350 350 330 330" strokeWidth="15"></path><path d="M 210 250 L 250 250 270 270" strokeWidth="15"></path><path d="M 405 330 L 405 370 L 450 350 L 405 330 Z" strokeWidth="10" className="arrow"></path></svg>
                    <svg onClick={this.restartOrPlayPreviousSong} viewBox="0 0 500 500" className="rela-block svg player"><path d="M 290 205 L 290 295 Q 290 300 284 299 L 197 253 Q 195 250 197 247 L 284 202 Q 290 200 290 205 Z" strokeWidth="0"></path><rect x="165" y="205" width="25" height="90" rx="8" ry="8" strokeWidth="0"></rect></svg>
                    <svg onClick={() => this.props.playSong(null)} viewBox="0 0 300 300" className="rela-block svg play-pause play">
                        <circle cx="150" cy="150" r="100"></circle><path d="M 115 105 L 115 195 Q 115 200 121 199 L 203 153 Q 205 150 203 147 L 121 102 Q 115 100 115 105 Z" strokeWidth="0"></path>
                    </svg>
                    <svg onClick={() => this.props.playSong(null)} viewBox="0 0 300 300" className="rela-block svg play-pause pause">
                        <circle cx="150" cy="150" r="100"></circle>
                        <rect x="109" y="105" width="25" height="90" rx="8" ry="8" strokeWidth="0"></rect>
                        <rect x="166" y="105" width="25" height="90" rx="8" ry="8" strokeWidth="0"></rect>
                    </svg>
                    <svg onClick={() => this.playNextSong()} viewBox="0 0 500 500" className="rela-block svg player"><path d="M 215 205 L 215 295 Q 215 300 221 299 L 303 253 Q 305 250 303 247 L 221 202 Q 215 200 215 205 Z" strokeWidth="0"></path><rect x="310" y="205" width="25" height="90" rx="8" ry="8" strokeWidth="0"></rect></svg>
                    <svg onClick={() => this.loop()} viewBox="0 0 600 600" className="rela-block svg repeat-loop"><path d="M 210 310 Q 210 250 270 250 L 310 250" strokeWidth="15" className='arrow'></path><path d="M 325 230 L 325 270 L 370 250 L 325 230 Z" strokeWidth="10" className="arrow"></path><path d="M 390 290 Q 390 350 330 350 L 290 350" strokeWidth="15" className='arrow'></path><path d="M 275 330 L 275 370 L 230 350 L 275 330 Z" strokeWidth="10" className="arrow"></path></svg>

                    <div className="audio-player__current-time">
                        <p className="audio-player__time audio-player__time-start">{this.formatTime(this.state.tempTime)}</p>
                        <input onChange={(e) => this.updateCurrentTime(e)}
                            type="range"
                            min="0"
                            max={song.duration ? song.duration : 250}
                            step="0.01"
                            value={song.currentTime ? song.currentTime : this.state.tempTime }
                            className="audio-player__time-slider" />
                        <p className="audio-player__time">{song.duration ? this.formatTime(song.duration) : '3:00'}</p>
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
                        className="audio-player__volume-input" />
                </div>

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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        playSong: (song) => dispatch(playSong(song)),
        updateSongCurrentTime: (time) => dispatch(updateSongCurrentTime(time)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayerFooter);

// export default AudioPlayerFooter;