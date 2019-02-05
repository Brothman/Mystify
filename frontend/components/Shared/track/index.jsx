import React from 'react';

export default class track extends React.Component {

    constructor(props) {
        super(props)
        this.state = { song: null, playing: false };
    }

    playMusic = (trackURL) => {
        const song = this.state.song;
        if (!song) {
            let hi = "hello";
            const newSong = new Audio(trackURL);
            debugger
            this.setState({ song: newSong, playing: true }, () => console.log('hi'));
            newSong.play();
        }
        else if (song.src == trackURL && this.state.playing) {
            debugger
            song.pause();
            this.setState({ playing: false })
        }
        else if (song.src == trackURL) {
            debugger
            song.play();
            this.setState({ playing: true })
        }
        else {
            debugger
            song.pause();
            const newSong = new Audio(trackURL);
            newSong.play();
            this.setState({ song: newSong, playing: true });
        }
    }

    render() {
        const { title, trackURL, trackLength } = this.props;
        return (
            <div className="track" onClick={() => this.playMusic(trackURL)}>
                <svg className="track__icon-play" viewBox="0 0 85 100"><path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"><title>PLAY</title></path></svg>
                <p className="track__title"> {title}</p>
                <p className="track__track-length"> {trackLength}</p>
            </div>
        );
    }
};

// const playMusic = (trackURL) => {
//     const song = new Audio(trackURL);
//     song.play();
// }

// const track = ({ title, trackURL, trackLength }) => {

//     return (
//         <div className="track" onClick={ () => playMusic(trackURL) }>
//             <svg class="track__icon-play" viewBox="0 0 85 100"><path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"><title>PLAY</title></path></svg>
//             <p className="track__title"> { title }</p>
//             <p className="track__track-length"> { trackLength }</p>
//         </div>
//     );
// };

// export default track;