export const createAudioAPI = (clickedSong) => {
    console.log(this)
    let chosenSong;

    this.props.clearPlayQueue();

    this.props.tracks.forEach(track => {
        const title = track.title;
        const trackURL = track.trackURL;
        const albumImgURL = track.album.imageURL;
        const albumID = track.album._id;
        const artist = track.artist;
        // const song = new Audio(trackURL);
        const song = new Audio();
        // song.preload = 'metadata';
        song.preload = 'none';
        song.src = trackURL;

        const newSong = { title, albumImgURL, albumID, artist, song }
        if (trackURL == clickedSong.song) {
            chosenSong = newSong;
        }
        this.props.addSongToPlayQueue(newSong);
    });

    return chosenSong;
}
