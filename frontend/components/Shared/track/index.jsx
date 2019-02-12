import React from 'react';
import { connect } from 'react-redux';
import { playSong, addSongToPlayQueue } from '../../../actions/songActions';

// class track extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = { };
//     }

        // componentDidMount() {
        //     //add to playQUEUE
        // }

//     render() {
//         const title = this.props.title;
//         const trackURL = this.props.trackURL;
//         const trackLength = this.props.trackLength;
//         const playSong = this.props.playSong;
//         const albumImgURL = this.props.albumImgURL;

//         const song = { title, albumImgURL, song: new Audio(trackURL) }

//         return (
//             <div className="track" onClick={() => playSong(song)}>
//                 <svg className="track__icon-play" viewBox="0 0 85 100"><path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"><title>PLAY</title></path></svg>
//                 <p className="track__title"> {title}</p>
//                 <p className="track__track-length"> {trackLength}</p>
//             </div>
//         );
//     }
// };

const track = ({ title, trackURL, trackLength, playSong, albumImgURL, addSongToPlayQueue }) => {

    // const song = new Audio(trackURL);
    const song = { title, albumImgURL, song: new Audio(trackURL) }

    addSongToPlayQueue(song);

    return (
        <div className="track" onClick={ () => playSong(song) }>
            <svg className="track__icon-play" viewBox="0 0 85 100"><path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"><title>PLAY</title></path></svg>
            <p className="track__title"> { title }</p>
            <p className="track__track-length"> { trackLength }</p>
        </div>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        playSong: (song) => dispatch(playSong(song)),
        addSongToPlayQueue: (song) => dispatch(addSongToPlayQueue(song)),
    }
}

export default connect(null, mapDispatchToProps)(track);