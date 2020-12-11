const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripSchema = new Schema({
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

module.exports = mongoose.model('Trip', tripSchema);