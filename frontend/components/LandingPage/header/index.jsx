import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="header">
            <img src="https://s3.us-east-2.amazonaws.com/mystify-images/logo_mystify.png" className="header__logo" />
            <h6 className="header__logo-text"> Mystify </h6>

            <a href="https://www.linkedin.com/in/brothman7000" className="header__nav-item"> LinkedIn </a>
            <a href="https://github.com/Brothman" className="header__nav-item"> Github </a>
            <div className="header__pipe"> </div>
            <h6 className="header__nav-item">Sign Up</h6>
            <h6 className="header__nav-item">Log In</h6>
        </div>
     );
}
 
export default Header;