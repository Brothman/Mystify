import React from 'react';

import Footer from './footer/index';
import Header from './header/index';
import Splash from './splash/index';


const LandingPage = () => {
    return ( 
       <React.Fragment>
           <Header />
           <Splash />
           <Footer />
       </React.Fragment> 
     );
}
 
export default LandingPage;