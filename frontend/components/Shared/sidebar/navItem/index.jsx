import React from 'react';

//destructure props for more semantic code
const NavItem = ( { iconUrl, text }) => {
    return ( 
        <div className="sidebar__nav-item">
            <img className="sidebar__nav-item-icon"
                 src={iconUrl} />
            <p className="sidebar__nav-item-text"> {text} </p>
        </div>
    );
}
 
export default NavItem;