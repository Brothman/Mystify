import React from 'react';

const Header = () => {
    return ( 
        <div className="header">
            <img src="" className="header__logo" />
            <h6 className="header__logo-text"> Mystify </h6>

            <h6 className="header__nav-item">LinkedIn</h6>
            <h6 className="header__nav-item">Github</h6>
            <div className="header__pipe"> </div>
            <h6 className="header__nav-item">Sign Up</h6>
            <h6 className="header__nav-item">Log In</h6>
        </div>
     );
}
 
export default Header;