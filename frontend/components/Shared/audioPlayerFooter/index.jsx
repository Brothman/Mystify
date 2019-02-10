import React from 'react';
import { connect } from 'react-redux';
import { playSong, updateSongCurrentTime } from '../../../actions/songActions';

class AudioPlayerFooter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            tempTime: 0,
        };
    }

    // componentDidMount(){
    //     //on mouse down add event listener to input so we follow its changes and ignore current time update

    //     //on mouse up add event listener back.

    //     const input = document.querySelector('.audio-player__time-slider');
    //     input.addEventListener('mousedown', (e) => {
    //         debugger
    //         input.removeEventListener('change', (event) => this.updateCurrentTime(event));
    //         const min = e.target.min,
    //             max = e.target.max,
    //             val = e.target.value;

    //         const realVal = (val - min) / max - min;
    //         this.setState({tempTime: val});

    //         input.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
    //             + 'color-stop(' + realVal + ', #aaa), '
    //             + 'color-stop(' + realVal + ', #404040)'
    //             + ')';
    //     });

    //     input.addEventListener('mouseup', (e) => {
    //         const min = e.target.min,
    //             max = e.target.max,
    //             val = e.target.value;

    //         const realVal = (val - min) / max - min;
    //         // this.props.song.removeEventListener('timeupdate', () => updateTimeInState(this.props.song, input));
    //         this.props.updateSongCurrentTime(val);
    //         // this.props.song.currentTime = realVal;

    //         input.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
    //             + 'color-stop(' + realVal + ', #aaa), '
    //             + 'color-stop(' + realVal + ', #404040)'
    //             + ')';
    //     });

    // }

    updateVolume = (e) => {
        const volume = e.target.value;
        debugger
        this.props.song ? this.props.song.volume = volume : null;
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
        //fill in
        debugger
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

    render() {
        return (
            <div className="audio-player">
                <div className="audio-player__song-info">
                    <img src={this.props.albums[0].imageURL} alt="" className="audio-player__album-img" />
                    <p className="audio-player__song-title">{this.props.tracks[0].title}</p>
                    <p className="audio-player__artist-name">{this.props.artist.name}</p>
                </div>

                <div className="audio-player__controls">
                    <svg viewBox="0 0 610 610" className="rela-block svg arrows"><path d="M 405 230 L 405 270 L 450 250 L 405 230 Z" strokeWidth="10" className="arrow"></path><path d="M 390 250 L 350 250 L 250 350 L 210 350" strokeWidth="15"></path><path d="M 390 350 L 350 350 330 330" strokeWidth="15"></path><path d="M 210 250 L 250 250 270 270" strokeWidth="15"></path><path d="M 405 330 L 405 370 L 450 350 L 405 330 Z" strokeWidth="10" className="arrow"></path></svg>
                    <svg viewBox="0 0 500 500" className="rela-block svg player"><path d="M 290 205 L 290 295 Q 290 300 284 299 L 197 253 Q 195 250 197 247 L 284 202 Q 290 200 290 205 Z" strokeWidth="0"></path><rect x="165" y="205" width="25" height="90" rx="8" ry="8" strokeWidth="0"></rect></svg>
                    <svg onClick={() => this.props.playSong(null)} viewBox="0 0 300 300" className="rela-block svg play-pause play">
                        <circle cx="150" cy="150" r="100"></circle><path d="M 115 105 L 115 195 Q 115 200 121 199 L 203 153 Q 205 150 203 147 L 121 102 Q 115 100 115 105 Z" strokeWidth="0"></path>
                    </svg>
                    <svg onClick={() => this.props.playSong(null)} viewBox="0 0 300 300" className="rela-block svg play-pause pause">
                        <circle cx="150" cy="150" r="100"></circle>
                        <rect x="109" y="105" width="25" height="90" rx="8" ry="8" strokeWidth="0"></rect>
                        <rect x="166" y="105" width="25" height="90" rx="8" ry="8" strokeWidth="0"></rect>
                    </svg>
                    <svg viewBox="0 0 500 500" className="rela-block svg player"><path d="M 215 205 L 215 295 Q 215 300 221 299 L 303 253 Q 305 250 303 247 L 221 202 Q 215 200 215 205 Z" strokeWidth="0"></path><rect x="310" y="205" width="25" height="90" rx="8" ry="8" strokeWidth="0"></rect></svg>
                    <svg viewBox="0 0 600 600" className="rela-block svg arrows"><path d="M 210 310 Q 210 250 270 250 L 310 250" strokeWidth="15"></path><path d="M 325 230 L 325 270 L 370 250 L 325 230 Z" strokeWidth="10" className="arrow"></path><path d="M 390 290 Q 390 350 330 350 L 290 350" strokeWidth="15"></path><path d="M 275 330 L 275 370 L 230 350 L 275 330 Z" strokeWidth="10" className="arrow"></path></svg>

                    <div className="audio-player__current-time">
                        <p className="audio-player__time">{(this.props.song.currentTime ? this.formatTime(this.props.song.currentTime) : '0:00')}</p>
                        <input onChange={(e) => this.updateCurrentTime(e)}
                            type="range"
                            min="0"
                            max={this.props.song.duration ? this.props.song.duration : 250}
                            step="0.01"
                            value={this.props.song.currentTime ? this.props.song.currentTime : this.state.tempTime }
                            className="audio-player__time-slider" />
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
        song: entities.song
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