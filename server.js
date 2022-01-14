

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileupload = require('express-fileupload');

mongoose.connect(process.env.DATABASE, async(error) => {
    if(error) throw error;
    console.log('Connected on db!');
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
    console.log('Error: ', error.message);
});

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(fileupload());

server.use(express.static(__dirname + '/public'));

server.get('/ping', (req, res) => {
    res.json({ status: true});
});

server.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.BASE);
});