const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const riderSchema = new Schema({
    name: String,
    email: String,
    avatarURL:String,
    trips: [{
        type: mongoose.Types.ObjectId,
        ref: 'Trip'}],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Rider', riderSchema);