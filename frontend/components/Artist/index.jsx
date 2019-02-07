import React from 'react';
import { getAlbum } from '../../utils/albumAPI';
import Sidebar from '../shared/sidebar/index.jsx';
import { getArtistTracks } from '../../utils/trackAPI';
import { getArtistAlbums } from '../../utils/albumAPI';
import { getArtist } from '../../utils/artistAPI';
import Track from '../shared/track/index';
import { Link } from 'react-router-dom';

export default class Album extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            artist: {}, 
            albums: [], 
            tracks: [], 
            song: null, 
            playing: false 
        };
    }

    async componentDidMount() {
        const id = this.props.match.params.id;

        //I am unsure if having three awaits in an array fires off all functions at once, or has to wait until one finishes.

        let tempArtist = getArtist(id);

        let tempTracks = getArtistTracks(id);

        let tempAlbums = getArtistAlbums(id);

        // let [artist, tracks, albums] = [await getArtist(id), await getArtistTracks(id), await getArtistAlbums(id)];
        let [artist, tracks, albums] = [await tempArtist, await tempTracks, await tempAlbums];
        artist = artist.data;
        tracks = tracks.data;
        albums = albums.data;

        this.setState({ artist, tracks, albums }, () => console.log(this.state));
    }

    playMusic = (trackURL) => {
        const song = this.state.song;
        if (!song) {
            const newSong = new Audio(trackURL);
            this.setState({ song: newSong, playing: true }, () => {
                console.log('hi')
                console.log(this.state);
            });
            newSong.play();
        }
        else if (song.src == trackURL && this.state.playing) {
            song.pause();
            this.setState({ playing: false })
        }
        else if (song.src == trackURL) {
            song.play();
            this.setState({ playing: true })
        }
        else {
            song.pause();
            const newSong = new Audio(trackURL);
            newSong.play();
            this.setState({ song: newSong, playing: true });
        }
    }

    createTracks = () => {
        return this.state.tracks.map((track, idx) => {
            return <Track title={track.title} t
                trackURL={track.trackURL}
                trackLength={track.trackLength}
                playMusic={this.playMusic}
                key={idx} />
        });
    }

    createAlbums = () => {
        return this.state.albums.map((album, idx) => {
            return (
                <div className="artist__album">
                <div className="artist__album-img-and-title">
                    <Link className="artist__album-img" to={`/album/${album._id}`}> 
                        <img className="artist__album-img" src={album.imageURL} />
                        <div className="artist__play-button">
                            <svg viewBox="0 0 300 300" className="svg-play"><circle cx="150" cy="150" r="100" strokeWidth="3"></circle><path d="M 110 95 L 110 205 Q 110 210 116 209 L 208 153 Q 210 150 208 147 L 116 92 Q 110 90 110 95 Z" strokeWidth="3"></path></svg>
                        </div>
                        <div className="artist-page__black-layer" />
                    </Link>
                    <Link to={`/album/${album._id}`} className="artist__album-title">{album.title}</Link>
                </div>

                    <Link to={`/artist/${this.state.artist._id}`} className="artist__album-artist">{this.state.artist.name}</Link>
                </div>
            );
        });
    }

    render() {
        //don't show outlines of img as data will be fetched quickly
        return (
            <div className="artist-page">
                <Sidebar />
                {!this.state.artist.name ? null :
                    <React.Fragment>

                        <h1 className="artist-page__name">{this.state.artist.name}</h1>
                        <button className="play-button">Play</button>

                        <div className="artist__nav-links">
                            <p className="artist__overview">OVERVIEW</p>
                            <p className="artist__about">ABOUT</p>
                        </div>
                        
                        <h3 className="artist__albums-header">Albums</h3>
                        <div className="artist__albums">
                            {this.createAlbums()}
                        </div>

                        <h3 className="artist__tracks-header">Tracks</h3>
                        <div className="artist__tracks">
                            {this.createTracks()}
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
};

