var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/loggedIn', function(req, res, next) {
  res.render('loggedIn', { title: 'Express' });
});
router.get('loggedOut', function(req, res, next) {
  res.render('loggedOut', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.get('/account', function(req, res, next) {
  res.render('account', { title: 'Express' });
});
router.get('/addChannel', function(req, res, next) {
  res.render('addChannel', { title: 'Express' });
});
router.get('/editChannel', function(req, res, next) {
  res.render('editChannel', { title: 'Express' });
});
router.get('/deleteChannel', function(req, res, next) {
  res.render('deleteChannel', { title: 'Express' });
});
router.get('/addFriend', function(req, res, next) {
  res.render('addFriend', { title: 'Express' });
});


module.exports = router;
