const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = mongoose.Schema({
  nom: {
    type: String,
    trim: true
  },
  pernom: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    trim: true
  },
  numero: {
    type: Number,
  },
  password: {
    type: String,
  }
});
//hashing a password before saving it to the database
let User = (module.exports = mongoose.model('User', userSchema, 'user'));
