import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="search__header">
            <NavLink activeClassName="search__nav-item--active" className="search__nav-item" to="/search">Artists</NavLink>
            <NavLink activeClassName="search__nav-item--active" className="search__nav-item" to="/search/albums">Albums</NavLink>
            <NavLink activeClassName="search__nav-item--active" className="search__nav-item" to="/search/tracks">Tracks</NavLink>
            <NavLink activeClassName="search__nav-item--active" className="search__nav-item" to="/search/playlists">Playlists</NavLink>
        </div>
    );
}

export default Header;