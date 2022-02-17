var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About', menuId:'about'});
});

router.get('/skills', function(req, res, next) {
  res.render('skills', {page:'Skills', menuId:'design-portfolio'});
});

router.get('/projects', function(req, res, next) {
  res.render('Projects', {page:'Projects', menuId:'code-portfolio'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact', menuId:'contact'});
});


module.exports = router;