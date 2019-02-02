// @ts-check

import React from 'react';
import Sidebar from '../shared/sidebar/index.jsx';
import Header from './header/index';
import Artist from '../shared/artist/index.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        let x = 15;
        x = 'hell';
        
    }
    render() { 
        return ( 
            <div className="home">
                <Sidebar />
                <Header />
                <Artist imageUrl="https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg" name="NF" />
            </div>
         );
    }
}
 
export default Home;