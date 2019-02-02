const Artist = ( { imageUrl, artist } ) => {
    return ( 
        <div className="artist">
            <img src={imageUrl} alt="" className="artist__photo"/>
            <p className="artist__name"> {artist} </p>
        </div>
     );
}
 
export default Artist;