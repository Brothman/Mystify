// @ts-check

import React from 'react';
import Sidebar from '../shared/sidebar/index.jsx';
import Header from './header/index';
import Artist from '../shared/artist/index.jsx';
import { getArtists } from '../../actions/artistActions';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {
        this.props.getArtists();
    }

    createArtists = () => {
        return this.props.artists.map((artist, idx) => {
            return <Artist id={artist._id} key={idx} imageUrl={artist.imageUrl} name={artist.name} />
        });
    }
    render() { 
        return ( 
            <div className="home">
                <Sidebar />
                { (!this.props.artists.length >= 1) ? null : 
                    <React.Fragment>
                        <Header />
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getArtists: () => dispatch(getArtists()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

