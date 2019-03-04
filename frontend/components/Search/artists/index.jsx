import React from 'react';
import Artist from '../../Shared/artist/index.jsx';


const createArtists = artists => {
    return artists.map((artist, idx) => {
        return <Artist id={artist._id} key={idx} imageUrl={artist.imageUrl} name={artist.name} />
    })
};

const Artists = ( { artists } ) => {
    return (
        <div className="search__results__artists">
            {createArtists(artists)}
        </div>
    );
};

export default Artists;