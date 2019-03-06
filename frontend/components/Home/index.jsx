// @ts-check

import React from 'react';
import Sidebar from '../Shared/sidebar/index.jsx';
import Header from './header/index';
import Artist from '../Shared/artist/index.jsx';
import { getArtists } from '../../actions/artistActions';
import { getAllTracks, clearTracks } from '../../actions/trackActions';
import { connect } from 'react-redux';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {
        this.props.getArtists();
        this.props.getAllTracks();
    }

    componentWillUnmount() {
        this.props.clearTracks();
    }

    //we are downloading way too much on the home page
    //if we download once clicked, that is faster, I think?
    //HUGE - I THINK THE DOM ERRORS HAPPEN WHEN THE SONG DOES NOT YET LOAD

    filterArtistTracks = (artistID) => {
        return this.props.tracks.filter(track => {
            if (track.artist._id === artistID) {
                return true;
            }
            return false;
        });

        // const newSongs = [];
        // return this.props.tracks.filter(track => {
        //     if (track.artist._id === artistID) {
        //         const title = track.title;
        //         const trackURL = track.trackURL;
        //         const albumImgURL = track.album.imageURL;
        //         const albumID = track.album._id;
        //         const artist = track.artist;
        //         // const song = new Audio(trackURL);
        //         const song = "gu";
    
        //         const newSong = { title, albumImgURL, albumID, artist, song }
        //         newSongs.push(newSong);
        //         // this.props.addSongToNewPlayQueue(newSong);
        //         return true;
        //     }
        //     return false;
        // })
        // .map((track, idx) => {
        //     return newSongs[idx];
        // });
    }

    createArtists = () => {
        return this.props.artists.map((artist, idx) => {
            return <Artist id={artist._id} 
                           key={idx} 
                           imageUrl={artist.imageUrl} 
                           name={artist.name}
                           tracks={this.filterArtistTracks(artist._id)} />
        });
    }
    render() { 
        return ( 
            <div className="home">
                <Sidebar />
                <Header />
                {(!this.props.artists.length >= 1 && !this.props.tracks.length >= 1) ? null : 
                    <React.Fragment>
                        <div className="home__artists">
                            {this.createArtists()}
                        </div>
                    </React.Fragment>
                }
            </div>
         );
    }
}
 
//destruct entities out of state
const mapStateToProps = ({ entities }) => {
    return {
        artists: entities.artists,
        tracks: entities.tracks,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getArtists: () => dispatch(getArtists()),
        getAllTracks: () => dispatch(getAllTracks()),
        clearTracks: () => dispatch(clearTracks()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

