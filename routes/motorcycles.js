const router = require('express').Router();
const motorcyclesCtrl = require('../controllers/motorcycles');

router.get('/motorcycles', motorcyclesCtrl.index);

module.exports = router;