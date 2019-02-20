import React from 'react';
import { Link } from 'react-router-dom';

const createAlbums = (albums) => {
    return albums.map((album, idx) => {
        return (
            <div className="artist__album" key={idx}>
                <div className="artist__album-img-and-title">
                    <Link className="artist__album-img" to={`/album/${album._id}`}>
                        <img className="artist__album-img" src={album.imageURL} />
                        <div className="artist__play-button">
                            <svg viewBox="0 0 300 300" className="svg-play"><circle cx="150" cy="150" r="100" strokeWidth="3"></circle><path d="M 110 95 L 110 205 Q 110 210 116 209 L 208 153 Q 210 150 208 147 L 116 92 Q 110 90 110 95 Z" strokeWidth="3"></path></svg>
                        </div>
                        <div className="artist-page__black-layer" />
                    </Link>
                    <Link to={`/album/${album._id}`} className="artist__album-title">{album.title}</Link>
                </div>

                <Link to={`/artist/${album.artist._id}`} className="artist__album-artist">{album.artist.name}</Link>
            </div>
        );
    });
}

const Albums = ({ albums }) => {
    debugger
    return (
        <div className="search__results__albums">
            {createAlbums(albums)}
        </div>
    );
};

export default Albums;