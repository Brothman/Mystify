import React from 'react';

const Artist = ( { imageUrl, name } ) => {
    return ( 
        <div className="artist">
            <div className="artist__photo-play">
                <img src={imageUrl} alt="" className="artist__photo"/>
                <div className="artist__play-button">
                    <svg viewBox="0 0 300 300" className="svg-play"><circle cx="150" cy="150" r="100" strokeWidth="3"></circle><path d="M 110 95 L 110 205 Q 110 210 116 209 L 208 153 Q 210 150 208 147 L 116 92 Q 110 90 110 95 Z" strokeWidth="3"></path></svg>
                </div>
                <div className="artist__black-layer" />
            </div>
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
