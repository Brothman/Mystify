// @ts-check

import React from 'react';
import Sidebar from '../shared/sidebar/index.jsx';
import Header from './header/index';
import Artists from './artists/index.jsx';
import Albums from './albums/index.jsx';
import Tracks from './tracks/index.jsx';
import { getArtists } from '../../actions/artistActions';
import { getAlbums } from '../../actions/albumActions';
import { getAllTracks, clearTracks } from '../../actions/trackActions';
import { clearNewPlayQueue } from '../../actions/playQueueActions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: "",
        };
    }

    componentDidMount() {
        this.props.getArtists();
        this.props.getAlbums();
        this.props.getAllTracks();
    }

    componentWillUnmount(){
        this.props.clearTracks();
        this.props.clearNewPlayQueue();
    }

    createArtists = () => {
        return this.props.artists.map((artist, idx) => {
            return <Artist id={artist._id} key={idx} imageUrl={artist.imageUrl} name={artist.name} />
        });
    }

    handleSearch = (e) => {
        this.setState({ text: e.target.value });
    }

    render() {
        return (
            <div className="search">
                <Sidebar />
                        <input className="search__input" 
                               onChange={this.handleSearch} 
                               value={this.state.text}
                               placeholder="Start typing..."/>
                        { this.state.text.length > 0 ? 
                       <div className="search__results-container">
                            <Header />
                            <Route exact path="/search" render={props => <Artists {...props} artists={this.props.artists} /> } />
                            <Route path="/search/albums" render={props => <Albums {...props} albums={this.props.albums} dog={"hi"} /> } />
                            <Route path="/search/tracks" render={props => <Tracks {...props} tracks={this.props.tracks} /> } />
                            <Route path="/search/playlists" render={props => <Artists {...props} artists={this.props.artists} /> } />
                        </div>
                    :
                        <div className="search__results">
                            <div className="search__initial-messsage">
                                <p className="search_header-text">Search Mystify</p>
                                <p className="search__body-text">Find your favorite songs, artists, albums, podcasts and playlists.</p>
                            </div>
                        </div>
                    }
            </div>
        );
    }
}

const mapStateToProps = ({ entities }) => {
    return {
        artists: entities.artists,
        albums: entities.albums,
        tracks: entities.tracks,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getArtists: () => dispatch(getArtists()),
        getAlbums: () => dispatch(getAlbums()),
        getAllTracks: () => dispatch(getAllTracks()),
        clearTracks: () => dispatch(clearTracks()),
        clearNewPlayQueue: () => dispatch(clearNewPlayQueue()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

