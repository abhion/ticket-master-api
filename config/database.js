const mongoose = require('mongoose');

const setupDB = () => {
    mongoose.connect('mongodb://localhost:27017/ticket-master')
        .then(res => console.log("Connected to db"))
        .catch(err => console.log(err));
}

module.exports = setupDB;