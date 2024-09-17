const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  github: {
    id: String,
    username: String
  },
  youtube: {
    id: String,
    username: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;