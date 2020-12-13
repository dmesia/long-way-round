const Rider = require('../models/rider');

module.exports = {
    index
};

function index(req, res) {
    Rider.find({}, function(err, riders) {
        res.render('riders/index', {
            riders,
            user: req.user,
        });
    });
};
