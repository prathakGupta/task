const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user.js');

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github', {
  failureRedirect: '/login'
}), (req, res) => {
  res.redirect('/private');
});

router.get('/youtube', passport.authenticate('youtube'));

router.get('/youtube/callback', passport.authenticate('youtube', {
  failureRedirect: '/login'
}), (req, res) => {
  res.redirect('/private');
});

module.exports = router;