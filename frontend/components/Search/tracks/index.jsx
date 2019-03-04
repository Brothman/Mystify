import React from 'react';
import HomeTrack from '../../Shared/homeTrack/index';

const createTracks = (tracks) => {
    return tracks.map((track, idx) => {
        return <HomeTrack title={track.title}
            trackURL={track.trackURL}
            trackLength={track.trackLength}
            album={track.album}
            album={track.album}
            artist={track.artist}
            key={idx} />
    });
}



const Tracks = ({ tracks }) => {
    return (
        <div className="search__results__tracks">
                { createTracks(tracks) }
        </div>
    );
};


export default Tracks;