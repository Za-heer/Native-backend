const mongoose = require('mongoose');
const Schema = mongoose.Schema({
  location: Object,
  date: String,
  porpuse: String,
});

const userSchema = mongoose.model('public', Schema);
module.exports = userSchema;
