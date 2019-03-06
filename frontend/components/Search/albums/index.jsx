import React from 'react';
import Album from '../../Shared/album/index.jsx';

const filterAlbumTracks = (artistID, tracks) => {
    return tracks.filter(track => {
        if (track.artist._id === artistID) {
            return true;
        }
        return false;
    });
}

const createAlbums = (albums, tracks) => {

    return albums.map((album, idx) => {
        return (
           <Album album={album} 
                  key={idx}
                  tracks={filterAlbumTracks(album.artist._id, tracks)} />
        );
    });
}

const Albums = ({ albums, tracks }) => {
    return (
        <div className="search__results__albums">
            {createAlbums(albums, tracks)}
        </div>
    );
};

export default Albums;