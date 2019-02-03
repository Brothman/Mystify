import React from 'react';
import LandingPage from './LandingPage/index';
import Home from './Home/index';
import { BrowserRouter, Route } from 'react-router-dom'

//Do Routes Here
//Perhaps Even Call This Routes

const Routes = () => {
    return ( 
        <BrowserRouter>
            <div className="app">
                <Route path="/" exact={true} component={LandingPage} />
                <Route path="/home" component={Home} />
            </div>
        </BrowserRouter>
     );
}
 
export default Routes;

//BUG watch out