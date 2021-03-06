const router = require('express').Router();
const passport = require('passport');

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/oauth2callback', passport.authenticate('google', {
    successRedirect: '/riders',
    failureRedirect: '/'
}));

router.get('/logout', function(req, res) {
    req.logOut();
    res.redirect('/');
});

router.get('/', function(req, res) {
    res.render('index');
});



module.exports = router;