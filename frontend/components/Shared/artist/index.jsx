import React from 'react';
import { Link } from 'react-router-dom';


const Artist = ( { imageUrl, name, id, tracks, playSong } ) => {
    const playArtistSong = (e) => {
        e.preventDefault();
        console.log(tracks[0]);
        playSong(tracks[0]);
    }


    return ( 
        <div className="artist">
            <Link className="artist__photo-play" to={`/artist/${id}`}>
                <img src={imageUrl} alt="" className="artist__photo"/>
                <div onClick={e => playArtistSong(e)} className="artist__play-button">
                    <svg viewBox="0 0 300 300" className="svg-play">
                        <circle cx="150" cy="150" r="100" strokeWidth="3"></circle>
                        <path d="M 110 95 L 110 205 Q 110 210 116 209 L 208 153 Q 210 150 208 147 L 116 92 Q 110 90 110 95 Z" strokeWidth="3"></path>
                    </svg>
                </div>
                <div className="artist__black-layer" />
            </Link>
            <p className="artist__name"> {name} </p>
        </div>
     );
}

export default Artist; 


//TODO say hello

//BUG fix me

//BUG df

//FIXME please

//TODO Hi

//Write Console.log snippet
