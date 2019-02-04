import React from 'react';
import { NavLink } from 'react-router-dom';

//destructure props for more semantic code
const NavItem = ( { iconUrl, text }) => {
    return ( 
        <div className="sidebar__nav-item">
            <div className="sidebar__svg-container">
                { (text == "Home") ? 
                        <svg viewBox="0 0 140 140" className="sidebar__svg-home"><path d="M 20 130 L 20 60 L 70 20 L 120 60 L 120 130 L 85 130 L 85 90 L 55 90 L 55 130 Z"></path></svg>
                : null }


                {(text == "Search") ?
                        <svg viewBox="0 0 140 140" className="sidebar__svg-search"><circle cx="60" cy="60" r="45"></circle><path d="M 90 90 L 125 125"></path></svg>
                    : null }

                {(text == "Your Library") ?
                        <svg viewBox="0 0 140 140" className="sidebar__svg-library"><path d="M 10 20 L 10 120"></path><path d="M 40 20 L 40 120"></path><path d="M 70 20 L 115 120"></path></svg>
                    : null}
            </div>
            
            <NavLink activeClassName="sidebar__nav-item-text--active" className="sidebar__nav-item-text" to={`${text}`}> {text} </NavLink>
        </div>
    );
}
 
export default NavItem;