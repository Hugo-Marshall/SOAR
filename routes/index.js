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
router.get('/createAccount', function(req, res, next) {
  res.render('createAccount', { title: 'Express' });
});
router.get('/accountSettings', function(req, res, next) {
  res.render('accountSettings', { title: 'Express' });
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
