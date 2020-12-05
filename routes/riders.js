const router = require('express').Router();
const ridersCtrl = require('../controllers/riders');

router.get('/riders', ridersCtrl.index);

module.exports = router;