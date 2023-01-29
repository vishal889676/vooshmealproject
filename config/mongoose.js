const mongoose = require('mongoose');

// connect from mongodb
mongoose.connect('mongodb://localhost:27017/voosh');

// aquire connection if it is succesful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// if connection is successful
db.once('open', function(){
    console.log("successfully connected to voosh database!");
});

module.exports = db;