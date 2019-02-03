import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="home__header">
            <NavLink activeClassName="home__nav-item--active" className="home__nav-item" to="/home">Artists</NavLink>
            <NavLink activeClassName="home__nav-item--active" className="home__nav-item" to="/albums">Albums</NavLink>
            <NavLink activeClassName="home__nav-item--active" className="home__nav-item" to="/tracks">Tracks</NavLink>
            <NavLink activeClassName="home__nav-item--active" className="home__nav-item" to="/playlists">Playlists</NavLink>
            <button className="home__new-playlist"> New Playlist </button>
        </div>
     );
}
 
export default Header;