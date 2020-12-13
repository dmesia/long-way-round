const router = require('express').Router();
const tripsCtrl = require('../controllers/trips');

router.get('/trips/new', tripsCtrl.new);
router.post('/trips', tripsCtrl.create);
router.get('/trips/:id', tripsCtrl.show);
// router.delete('/trips/:id', tripsCtrl.deleteTrip);

module.exports = router;