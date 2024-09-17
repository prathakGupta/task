const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', passport.authenticate('session'), (req, res) => {
  res.render('private', { title: 'Private Page' });
});

module.exports = router;