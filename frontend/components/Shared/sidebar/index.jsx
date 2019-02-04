import React from 'react';
import { NavLink, Link } from 'react-router-dom';


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="sidebar">
                <Link className="sidebar__nav-logo" to="/home">
                    <img src="https://s3.us-east-2.amazonaws.com/mystify-images/logo_mystify.png" alt="" className="sidebar__logo"/>                    
                    <h1 className="sidebar__mystify">Mystify</h1>
                </Link>


                <NavLink activeStyle={{ color: 'rgba(255, 255, 255, 1)' }} className="sidebar__nav-item" to="/search">
                        <div className="sidebar__svg-container">
                            <svg viewBox="0 0 140 140" className="sidebar__svg-search"><circle cx="60" cy="60" r="45"></circle><path d="M 90 90 L 125 125"></path></svg>
                        </div>

                        <p className="sidebar__nav-item-text"> Search </p>
                </NavLink>

                <NavLink activeStyle={{ color: 'rgba(255, 255, 255, 1)' }} className="sidebar__nav-item" to="/home">
                    <div className="sidebar__svg-container">
                        <svg viewBox="0 0 140 140" className="sidebar__svg-home"><path d="M 20 130 L 20 60 L 70 20 L 120 60 L 120 130 L 85 130 L 85 90 L 55 90 L 55 130 Z"></path></svg>
                    </div>
                    <p className="sidebar__nav-item-text"> Home </p>
                </NavLink>

                <NavLink activeStyle={{ color: 'rgba(255, 255, 255, 1)' }} className="sidebar__nav-item" to="/library">
                    <div className="sidebar__svg-container">
                        <svg viewBox="0 0 140 140" className="sidebar__svg-library"><path d="M 10 20 L 10 120"></path><path d="M 40 20 L 40 120"></path><path d="M 70 20 L 115 120"></path></svg>
                    </div>
                    <p className="sidebar__nav-item-text"> Your Library </p>
                </NavLink>
            </div>
         );
    }
}
 
export default Sidebar;
