const express = require('express');
const opn = require('opn');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Seems to be needed to host my static files on the server for the index.html to use
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
        opn('http://localhost:3000/');
    }
});