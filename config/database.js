const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/long-way-round', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Mongoose connected to:${db.host}:${db.port}`);
});