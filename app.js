const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const path = require('path');

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up session
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Set up routes
const authRoutes = require('./routes/auth.js');
const privateRoutes = require('./routes/private.js');
app.use('/auth', authRoutes);
app.use('/private', privateRoutes);

// Serve static files
app.use(express.static('public'));

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});