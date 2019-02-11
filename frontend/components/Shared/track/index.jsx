import React from 'react';
import { connect } from 'react-redux';
import { playSong } from '../../../actions/songActions';

const track = ({ title, trackURL, trackLength, playSong, albumImgURL }) => {

    // const song = new Audio(trackURL);
    const song = { title, albumImgURL, song: new Audio(trackURL) }
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
    }
}

export default connect(null, mapDispatchToProps)(track);