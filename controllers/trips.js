const Trip = require('../models/trip');
const Motorcycle = require('../models/motorcycle');

module.exports = {
    new: newTrip,
    create,
    show,
    deleteTrip
};

function newTrip(req, res) {
    Motorcycle.find({}, function(err, motorcycles) {
        res.render('trips/new', {
            motorcycles
        });
    });
};

function create(req, res) {
    const trip = new Trip(req.body);

    trip.save(function (err) {
        console.log(trip);
        if (err) return res.render('trips/new');
        res.redirect('./riders');
    });
};

function show(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
        res.render('trips/show', { trip });
    });
};

function deleteTrip(req, res) {
    Trip.findByIdAndDelete(req.params.id, function(err, trip) {
        if(err) return res.redirect('./riders');
        console.log(trip);
        res.redirect('./riders');
    });
};