import React from 'react';
import { NavLink } from 'react-router-dom';

//destructure props for more semantic code
const NavItem = ( { iconUrl, text }) => {
    return ( 
        <div className="sidebar__nav-item">
            { (text == "Home") ? 
                <div className="sidebar__svg-container">
                    <svg viewBox="0 0 140 140" className="sidebar__svg-home"><path d="M 20 130 L 20 60 L 70 20 L 120 60 L 120 130 L 85 130 L 85 90 L 55 90 L 55 130 Z"></path></svg>
                </div>
            : null }

            
            <NavLink className="sidebar__nav-item-text" to={`${text}`}> {text} </NavLink>
        </div>
    );
}
 
export default NavItem;