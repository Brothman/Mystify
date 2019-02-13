// @ts-check

import React from 'react';
import Sidebar from '../shared/sidebar/index.jsx';
import Home from '../Home/index.jsx';
// import Header from './header/index';
// import Artist from '../shared/artist/index.jsx';
// import { getArtists } from '../../actions/artistActions';
// import { connect } from 'react-redux';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: "",
        };
    }

    componentDidMount() {
        // this.props.getArtists();
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
                        <div className="search__results">
                            <div className="search__initial-messsage">
                                <p className="search_header-text">Search Mystify</p>
                                <p className="search__body-text">Find your favorite songs, artists, albums, podcasts and playlists.</p>
                            </div>
                        </div>
            </div>
        );
    }
}

//destruct entities out of state
// const mapStateToProps = ({ entities }) => {
//     return {
//         artists: entities.artists,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         getArtists: () => dispatch(getArtists()),
//     };
// };

export default Search;

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

