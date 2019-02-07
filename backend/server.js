const express = require('express');
const opn = require('opn');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const userRouter = require('./resources/users/userRouter');
import albumRouter from './resources/albums/albumRouter';
import artistRouter from './resources/artists/artistRouter';
const playlistRouter = require('./resources/playlists/playlistRouter');
import trackRouter from './resources/tracks/trackRouter';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Serve my static files from the public folder for the index.html to use
app.use(express.static(path.resolve(__dirname, '..', 'public')));

mongoose.connect('mongodb://localhost:27017/mystify', { useNewUrlParser: true });

// app.use('/api/user', userRouter);
app.use('/api/albums', albumRouter);
// app.use('/api/artists', artistRouter);
// app.use('/api/playlists', playlistRouter);
app.use('/api/tracks', trackRouter);

app.use('/api/artists', artistRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/home*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/artist*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/album*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/search*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/library*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('*', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    res.sendFile(__dirname + '/404.html');
});

const env = process.env.NODE_ENV || 'dev';

//process.env.PORT lets the port be set by Heroku
//PORT will be undefined if run locally with nodemon server.js

const port = process.env.PORT || 3000;

app.listen(port, () => {
    if (env == 'dev') {
        console.log(`Server listening on port ${port}!`);
        // opn('http://localhost:3000/');
       //commenting out open because server keeps restarting when I rebundle; 
    }
});


//"dev": "start npm run start-watch && start npm run wp-server"

