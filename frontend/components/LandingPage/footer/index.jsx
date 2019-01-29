import React from 'react';

const Footer = () => {
    return ( 
        <div className="footer">
            <img src="" alt="" className="footer__logo"/>
            <h6 className="footer__logo-text">Mystify</h6>

            <div className="footer__nav">
              <p className="footer__title"> Github </p>
              <p className="footer__nav-item"> LinkedIn </p>
              <p className="footer__nav-item"> Personal Website </p>
            </div>

            <div className="footer__nav">
                <p className="footer__title"> Useful Links</p>
                <p className="footer__nav-item"> Sign Up</p>
                <p className="footer__nav-item"> Sign In</p>
            </div>

            <div className="footer__nav">
                <p className="footer__title"> Useful Links</p>
                <p className="footer__nav-item"> Other Links</p>
            </div>

            <div className="footer__social-icons">
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
            </div>
        </div>
     );
}
 
export default Footer;