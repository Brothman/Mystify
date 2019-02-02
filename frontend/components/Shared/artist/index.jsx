import React from 'react';

const Artist = ( { imageUrl, name } ) => {
    return ( 
        <div className="artist">
            <img src={imageUrl} alt="" className="artist__photo"/>
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
