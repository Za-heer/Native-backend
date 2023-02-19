const express = require('express');
const route = express.Router();

const allUsers = require('../Controller/allUsers');
route.post('/public', allUsers);
module.exports = route;
