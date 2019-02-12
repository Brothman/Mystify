import React from 'react';
import LandingPage from './LandingPage/index';
import Home from './Home/index';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Album from './Album/index';
import Artist from './Artist/index';
import { Provider } from 'react-redux';
import AudioPlayerFooter from './shared/audioPlayerFooter/index';


//Do Routes Here
//Perhaps Even Call This Routes

const Routes = ({ store }) => {
    return ( 
        <BrowserRouter>
            <Provider store={store}>
                <div className="app">

                    <Route path="/home/" exact={true} render={() => <Redirect to="/home/artists" />} />
                    <Route path="/home/artists" component={Home} />
                    <Route path="/home/albums" component={Home} />
                    <Route path="/home/tracks" component={Home} />
                    <Route path="/home/playlists" component={Home} />
                    <Route path="/search" component={Home} />
                    <Route path="/library" component={Home} />
                    <Route path="/album/:id" component={Album} />
                    <Route path="/artist/:id" component={Artist} />

                    <Switch>
                        <Route path="/" exact={true} component={LandingPage} />
                        <Route path="/" component={AudioPlayerFooter} />
                    </Switch>

                </div>
            </Provider>
        </BrowserRouter>
     );
}
 
export default Routes;

//BUG watch out

{/* <AudioPlayerFooter /> */}