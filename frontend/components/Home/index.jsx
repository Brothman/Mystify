// @ts-check

import React from 'react';
import Sidebar from '../shared/sidebar/index.jsx';
import Header from './header/index';
import Artist from '../shared/artist/index.jsx';
import { debug } from 'util';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        let x = 15;
        x = 'hell';
        
    }

    createArtists = () => {
        const artists = [
            ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
            ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
            ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
            ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
            ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
            ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
            ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
            ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
            ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
            ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
            ["https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg", "NF"],
        ];
        return artists.map((artist, idx) => {
            return <Artist key={idx} imageUrl={artist[0]} name={artist[1]} />
        });
    }
    render() { 
        return ( 
            <div className="home">
                <Sidebar />
                <Header />
                <div className="home__artists">
                   {this.createArtists()}
                </div>
            </div>
         );
    }
}
 
export default Home;