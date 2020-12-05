const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    motorcycle: {
        type: mongoose.Types.ObjectId,
        ref: 'Motorcycle'
    },
    start: {
        type: Date,
        default: function() {
            const date = Date();
            const year = date.getFullYear();
            date.setFullYear(year);
            return date;
        }
    },
    end: Date,
    text: String
}, {
    timestamps: true
});

const riderSchema = new mongoose.Schema({
    name: String,
    email: String,
    trips: [tripSchema],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Rider', riderSchema);