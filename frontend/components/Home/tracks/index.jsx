// @ts-check

import React from 'react';
import Sidebar from '../../shared/sidebar/index.jsx';
import Track from '../../shared/track/index.jsx';
import Header from '../header/index';
import { getAllTracks } from '../../../actions/trackActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomeTracks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getAllTracks();
    }

    createTracks = () => {
        return this.props.tracks.map((track, idx) => {
            return <Track title={track.title}
                trackURL={track.trackURL}
                trackLength={track.trackLength}
                albumImgURL={track.album.imageURL}
                key={idx} />
        });
    }

    render() {
        return (
            <div className="home-track">
                <Sidebar />
                {(!this.props.tracks.length >= 1) ? null :
                    <React.Fragment>
                        <Header />
                        <div className="home-track__tracks">
                            {this.createTracks()}
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
        tracks: entities.tracks,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllTracks: () => dispatch(getAllTracks()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTracks);

