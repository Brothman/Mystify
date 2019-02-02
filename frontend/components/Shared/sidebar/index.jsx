import React from 'react';
import NavItem from './navItem/index';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="sidebar">
                <NavItem iconUrl="https://s3.us-east-2.amazonaws.com/mystify-images/SearchThin.svg" text="Search" />
                <NavItem iconUrl="https://s3.us-east-2.amazonaws.com/mystify-images/HomeIconWhite.svg" text="Home" />
                <NavItem iconUrl="https://s3.us-east-2.amazonaws.com/mystify-images/LibraryIconThin.svg" text="Your Library" />
            </div>
         );
    }
}
 
export default Sidebar;