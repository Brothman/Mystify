import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="footer">
            <Link to="/" className="footer_logo-container">
                <img src="https://s3.us-east-2.amazonaws.com/mystify-images/logo_mystify.png" alt="" className="footer__logo" />
                <h6 className="footer__logo-text">Mystify</h6>
            </Link>
          
            <div className="footer__nav footer__nav-1">
                <p className="footer__title"> Bonus Links</p>
                <a href="https://github.com/Brothman" className="footer__nav-item"> Github </a>
                <a href="https://www.linkedin.com/in/brothman7000" className="footer__nav-item"> LinkedIn </a>
                <a href="http://benjirothman.com/" className="footer__nav-item"> Personal Website </a>
            </div>

            <div className="footer__nav footer__nav-2">
                <p className="footer__title"> Useful Links</p>
                <Link to ="/home" className="footer__nav-item"> Sign Up</Link>
                <Link to="/home" className="footer__nav-item"> Sign In</Link>
            </div>

            <div className="footer__nav footer__nav-3">
                <a href="https://github.com/Brothman" className="fab fa-github social-icon"></a>
                <a href="https://www.linkedin.com/in/brothman7000" className="fab fa-linkedin social-icon"></a>
            </div>
        </div>
     );
}
 
export default Footer;