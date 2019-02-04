const express = require('express');
const opn = require('opn');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const userRouter = require('./resources/users/userRouter');
const albumRouter = require('./resources/albums/albumRouter');
const artistRouter = require('./resources/artists/artistRouter');
const playlistRouter = require('./resources/playlists/playlistRouter');
const trackRouter = require('./resources/tracks/trackRouter');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Serve my static files from the public folder for the index.html to use
app.use(express.static(path.resolve(__dirname, '..', 'public')));

// app.use('/api/user', userRouter);
// app.use('/api/album', albumRouter);
// app.use('/api/artist', artistRouter);
// app.use('/api/playlist', playlistRouter);
// app.use('/api/track', trackRouter);

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const env = process.env.NODE_ENV || 'dev';

//process.env.PORT lets the port be set by Heroku
//PORT will be undefined if run locally with nodemon server.js

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/mystify', { useNewUrlParser: true });

app.listen(port, () => {
    if (env == 'dev') {
        console.log(`Server listening on port ${port}!`);
        // opn('http://localhost:3000/');
       //commenting out open because server keeps restarting when I rebundle; 
    }
});


//"dev": "start npm run start-watch && start npm run wp-server"

