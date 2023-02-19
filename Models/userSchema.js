const mongoose = require('mongoose');
const Schema = mongoose.Schema({
  location: String,
  date: Object,
  porpuse: String,
});

const userSchema = mongoose.model('public', Schema);
module.exports = userSchema;
