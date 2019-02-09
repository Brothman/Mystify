// @ts-check

import React from 'react';
import Sidebar from '../shared/sidebar/index.jsx';
import Header from './header/index';
import Artist from '../shared/artist/index.jsx';
import { getArtists } from '../../actions/artistActions';
import { connect } from 'react-redux';
import { debug } from 'util';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { artists: [] }
        let x = 15;
        x = 'hell';
    }

    componentDidMount() {
        this.props.getArtists();
        // let artists = await getArtists();
        // artists = artists.data;
        // this.setState({ artists });
        
    }

    createArtists = () => {
        // const artists = [
        //     ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
        //     ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
        //     ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
        //     ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
        //     ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
        //     ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
        //     ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
        //     ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
        //     ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
        //     ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
        //     ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
        // ];
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
                        <audio controls>
                            <source src="https://s3.us-east-2.amazonaws.com/mystify-images/Talk+Like+A+Robot+V1.mp3" type="audio/mp3" />
                        </audio>
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

