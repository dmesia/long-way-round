const router = require('express').Router();
const motorcyclesCtrl = require('../controllers/motorcycles');

router.get('/motorcycles', motorcyclesCtrl.index);
router.get('/motorcycles/new', motorcyclesCtrl.new);
router.post('/motorcycles', motorcyclesCtrl.create);
router.get('/motorcycles/:id', motorcyclesCtrl.show);
router.delete('/motorcycles/:id', motorcyclesCtrl.deleteMotorcycle);
router.post('/motorycles/:id', motorcyclesCtrl.addComment);

module.exports = router;