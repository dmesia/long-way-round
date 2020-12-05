const Motorcycle = require('../models/motorcycle');

module.exports = {
    index
};

function index(req, res) {
    Motorcycle.find({}, function(err, motorcycles) {
        res.render('motorcycles/index', { motorcycles });
    });
};