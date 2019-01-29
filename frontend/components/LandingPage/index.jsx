import React from 'react';

import Footer from './footer/index';
import Header from './header/index';
import Splash from './splash/index';


const LandingPage = () => {
    return ( 
       <div className="landingPage">
           <Header />
           <Splash />
           <Footer />
        </div>
     );
}
 
export default LandingPage;