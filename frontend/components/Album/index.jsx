import React from 'react';
import { getAlbum } from '../../utils/albumAPI';
import Sidebar from '../shared/sidebar/index.jsx';
import { getAlbumTracks } from '../../utils/trackAPI';
import Track from '../shared/track/index';
import { Link } from 'react-router-dom';

export default class Album extends React.Component {

    constructor(props) {
        super(props)
        this.state = { album: {}, tracks: [], song: null, playing: false };
    }

    async componentDidMount(){
        const id = this.props.match.params.id;
        // const id ="5c5ad910fff1e5a2b40aae47";
        let album = await getAlbum(id);
        album = album.data;

        let tracks = await getAlbumTracks(album._id);
        tracks = tracks.data;

        this.setState({ album, tracks });
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

    render() {
        //don't show outlines of img as data will be fetched quickly
        return (
            <div className="album">
                <Sidebar />
                { !this.state.album.title ? null :
                    <React.Fragment>
                    
                        <div className="album__information">
                            <img src={this.state.album.imageURL} className="album__cover" />
                            <p className="album__title">{this.state.album.title}</p>
                            {!this.state.album.artist ? null: 
                                <Link to={`/artist/${this.state.album.artist._id}`} className="album__artist">
                                    {this.state.album.artist.name}
                                </Link> 
                            }
                            <p className="album__song-count">{this.state.tracks.length == 1 ? 
                                                                this.state.tracks.length + ' SONG':
                                                                 this.state.tracks.length + ' SONGS'}</p>
                        </div>

                        <div className="album__tracks">
                            {this.createTracks()}
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
};

