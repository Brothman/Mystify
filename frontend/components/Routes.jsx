import React from 'react';
import LandingPage from './LandingPage/index';
import Home from './Home/index';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

//Do Routes Here
//Perhaps Even Call This Routes

const Routes = () => {
    return ( 
        <BrowserRouter>
            <div className="app">
                <Route path="/" exact={true} component={LandingPage} />
                <Route path="/home/" render={() => <Redirect to="/home/artists" />} />
                <Route path="/home/artists" component={Home} />
                <Route path="/home/albums" component={Home} />
                <Route path="/home/tracks" component={Home} />
                <Route path="/home/playlists" component={Home} />
                <Route path="/search" component={Home} />
                <Route path="/library" component={Home} />
            </div>
        </BrowserRouter>
     );
}
 
export default Routes;

//BUG watch out