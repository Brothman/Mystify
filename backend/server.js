const express = require('express');
const opn = require('opn');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Serve my static files from the public folder for the index.html to use
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
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