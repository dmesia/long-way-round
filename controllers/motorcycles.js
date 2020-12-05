const Motorcycle = require('../models/motorcycle');

module.exports = {
    index,
    new: newMotorcycle,
    create
};

function index(req, res) {
    Motorcycle.find({}, function(err, motorcycles) {
        res.render('motorcycles/index', { motorcycles });
    });
};

function newMotorcycle(req, res) {
    res.render('motorcycles/new');
};

function create(req, res) {
    const motorcycle = new Motorcycle(req.body);

    motorcycle.save(function (err) {
        console.log(motorcycle);
        if (err) return res.render('motorcycles/new');
        res.redirect('/motorcycles');
    });
};