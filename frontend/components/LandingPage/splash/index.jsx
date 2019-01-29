import React from 'react';

const Splash = () => {
    return ( 
        <div className="splash">
            <img className="splash__image" src="https://s3.us-east-2.amazonaws.com/mystify-images/mystify-splashpage.svg" />
            <h1 className="splash__title"> Music for everyone.</h1>
            <h1 className="splash__subtitle"> Millions of songs. No credit card needed.</h1>
            <button className="splash__button"> Get Mystify Free </button>
        </div>
     );
}
 
export default Splash;