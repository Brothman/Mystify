import React from 'react';
import LandingPage from './LandingPage/index';
import Home from './Home/index';
import Search from './Search/index';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Album from './Album/index';
import HomeAlbums from './Home/albums/index';
import HomeTracks from './Home/tracks/index';
import Artist from './Artist/index';
import { Provider } from 'react-redux';
import AudioPlayerFooter from './Shared/audioPlayerFooter/index';


//Do Routes Here
//Perhaps Even Call This Routes

const Routes = ({ store }) => {
    return ( 
        <BrowserRouter>
            <Provider store={store}>
                <div className="app">

                    <Switch>
                        <Route path="/" exact={true} component={LandingPage} />
                        <Route path="/" component={AudioPlayerFooter} />
                    </Switch>

                    <Switch>
                        <Route path="/home/" exact={true} render={() => <Redirect to="/home/artists" />} />
                        <Route path="/home/artists" component={Home} />
                        <Route path="/home/albums" component={HomeAlbums} />
                        <Route path="/home/tracks" component={HomeTracks} />
                        <Route path="/home/playlists" component={Home} />
                        <Route path="/search" component={Search} />
                        <Route path="/library" component={Home} />
                        <Route path="/album/:id" component={Album} />
                        <Route path="/artist/:id" component={Artist} />
                    </Switch>

                </div>
            </Provider>
        </BrowserRouter>
     );
}
 
export default Routes;

//BUG watch out

{/* <AudioPlayerFooter /> */}

//                        <Route path="/*" render={() => window.location.href="/woah" }/>