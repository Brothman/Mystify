import React from 'react';
import Artist from '../../Shared/artist/index.jsx';

const filterArtistTracks = (artistID, tracks) => {
    return tracks.filter(track => {
        if (track.artist._id === artistID) {
            return true;
        }
        return false;
    });
}

const createArtists = (artists, tracks) => {
    return artists.map((artist, idx) => {
        return <Artist id={artist._id}
            key={idx}
            imageUrl={artist.imageUrl}
            name={artist.name}
            tracks={filterArtistTracks(artist._id, tracks)} />
    })
};

const Artists = ( { artists, tracks } ) => {
    return (
        <div className="search__results__artists">
            {createArtists(artists, tracks)}
        </div>
    );
};

export default Artists;