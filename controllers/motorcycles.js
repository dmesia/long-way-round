const Motorcycle = require('../models/motorcycle');

module.exports = {
    index,
    new: newMotorcycle,
    create,
    show,
    deleteMotorcycle
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

function show(req, res) {
    Motorcycle.findById(req.params.id, function(err, motorcycle) {
        res.render('motorcycles/show', { motorcycle });
    });
};

function deleteMotorcycle(req, res) {
    Motorcycle.findByIdAndDelete(req.params.id, function(err, motorcycle) {
        if(err) return res.redirect('/motorcycles');
        console.log(motorcycle);
        res.redirect('/motorcycles');
    });
};