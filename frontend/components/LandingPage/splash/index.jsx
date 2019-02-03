import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
    return ( 
        <div className="splash">
            <h1 className="splash__title"> Music for everyone.</h1>
            <h1 className="splash__subtitle"> Millions of songs. No credit card needed.</h1>
            <Link className="splash__button" to="/home">
                 Get Mystify Free 
            </Link>
        </div>
     );
}
 
export default Splash;

//             <img className="splash__image" src="https://s3.us-east-2.amazonaws.com/mystify-images/mystify-splashpage.svg" />
