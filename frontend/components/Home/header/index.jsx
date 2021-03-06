import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="home__header">
            <NavLink activeClassName="home__nav-item--active" className="home__nav-item" to="/home/artists">Artists</NavLink>
            <NavLink activeClassName="home__nav-item--active" className="home__nav-item" to="/home/albums">Albums</NavLink>
            <NavLink activeClassName="home__nav-item--active" className="home__nav-item" to="/home/tracks">Tracks</NavLink>
            <button className="home__new-playlist"> Inactive </button>
        </div>
     );
}
 
export default Header;