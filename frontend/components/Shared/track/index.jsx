import React from 'react';

const track = ({ title, trackURL, trackLength, playMusic }) => {

    const newSong = new Audio(trackURL);
    return (
        <div className="track" onClick={ () => playMusic(newSong) }>
            <svg className="track__icon-play" viewBox="0 0 85 100"><path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"><title>PLAY</title></path></svg>
            <p className="track__title"> { title }</p>
            <p className="track__track-length"> { trackLength }</p>
        </div>
    );
};

export default track;