import React from 'react';

const Header = () => {
    return ( 
        <div className="header">
            <img className="header__logo" />
            <h6 className="header__logo-text"> Mystify </h6>

            <h6 className="header__nav-item">LinkedIn</h6>
            <h6 className="header__nav-item">Github</h6>
            <h6 className="header__pipe"> | </h6>
            <h6 className="header__nav-item">Sign Up</h6>
            <h6 className="header__nav-item">Log In</h6>
        </div>
     );
}
 
export default Header;