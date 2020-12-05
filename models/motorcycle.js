const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const motorcycleSchema = new Schema({
    year: {
        type: Number,
        min: '1885'
    },
    make: String,
    model: String,
    style: {
        type: String,
        enum: ['Standard', 'Cruiser', 'Sport', 'Touring', 'ADV', 'Dirt']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Motorcycle', motorcycleSchema);