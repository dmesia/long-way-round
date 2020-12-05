const router = require('express').Router();
const motorcyclesCtrl = require('../controllers/motorcycles');

router.get('/motorcycles', motorcyclesCtrl.index);
router.get('/motorcycles/new', motorcyclesCtrl.new);
router.post('/motorcycles', motorcyclesCtrl.create);

module.exports = router;