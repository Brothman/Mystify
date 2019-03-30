import React from 'react';

export const addAudioAPI = (WrappedComponent) => {
    class HigherOrderComponent extends React.Component {

        createAudioAPI = (clickedSong) => {
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

        render() {
            return <WrappedComponent createAudioAPI={this.createAudioAPI}
                                     {...this.props} />
        }
    };

    return HigherOrderComponent;
};


export const addPlayThisSong = (WrappedComponent) => {
    class HigherOrderComponent extends React.Component {

        playThisSong = (clicked, song) => {
            if (clicked) {
                song = this.props.createAudioAPI(song);
            }

            //using setTimeout to put this on the asynchronous stack, so playQueue updates first
            setTimeout(() => {
                let idx = 0;
                const playQueue = this.props.playQueue;
                for (let i = 0; i < playQueue.length; i++) {
                    if (playQueue[i].title == song.title) {
                        idx = i;
                    }
                }

                if (idx == playQueue.length - 1) {
                    //make the button turn to pause
                    song.song.addEventListener('ended', () => {
                        showPlayButton();
                    });
                }
                else {
                    song.song.addEventListener('ended', () => {
                        this.playThisSong(false, playQueue[idx + 1]);
                    })
                }

                this.props.playSong(song);
            }, 0);
        }
        
        render() {
            return <WrappedComponent playThisSong={this.playThisSong} 
                                     {...this.props} />
        }
    }
    return HigherOrderComponent;
};