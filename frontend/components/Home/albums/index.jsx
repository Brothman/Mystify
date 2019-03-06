// @ts-check

import React from 'react';
import Sidebar from '../../Shared/sidebar/index.jsx';
import Header from '../header/index';
import { getAlbums } from '../../../actions/albumActions';
import { getAllTracks, clearTracks } from '../../../actions/trackActions';
import { connect } from 'react-redux';
import Album from '../../Shared/album/index.jsx';

class HomeAlbums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getAlbums();
        this.props.getAllTracks();
    }

    componentWillUnmount() {
        this.props.clearTracks();
    }

    filterAlbumTracks = (artistID) => {
        return this.props.tracks.filter(track => {
            if (track.artist._id === artistID) {
                return true;
            }
            return false;
        });
    }


    createAlbums = () => {
        return this.props.albums.map((album, idx) => {
            return (
                <Album album={album} 
                       key={idx}
                       tracks={this.filterAlbumTracks(album.artist._id)}  />
            );
        });
    }

    render() {
        return (
            <div className="home-album">
                <Sidebar />
                <Header />
                {(!this.props.albums.length >= 1 && !this.props.tracks.length >= 1) ? null :
                    <React.Fragment>
                        <div className="home-album__albums">
                            {this.createAlbums()}
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
        albums: entities.albums,
        tracks: entities.tracks,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAlbums: () => dispatch(getAlbums()),
        getAllTracks: () => dispatch(getAllTracks()),
        clearTracks: () => dispatch(clearTracks()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeAlbums);

