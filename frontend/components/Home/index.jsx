// @ts-check

import React from 'react';
import Sidebar from '../shared/sidebar/index.jsx';
import Header from './header/index';
import Artist from '../shared/artist/index.jsx';
import { getArtists } from '../../utils/artistAPI';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { artists: [] }
        let x = 15;
        x = 'hell';
    }

    async componentDidMount() {
        let artists = await getArtists();
        artists = artists.data;
        this.setState({ artists });
        
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
        return this.state.artists.map((artist, idx) => {
            return <Artist id={artist._id} key={idx} imageUrl={artist.imageUrl} name={artist.name} />
        });
    }
    render() { 
        return ( 
            <div className="home">
                <Sidebar />
                <Header />
                <div className="home__artists">
                   { this.createArtists() }
                </div>
                <audio controls>
                    <source src="https://s3.us-east-2.amazonaws.com/mystify-images/Talk+Like+A+Robot+V1.mp3" type="audio/mp3"/>
                </audio>
            </div>
         );
    }
}
 
export default Home;