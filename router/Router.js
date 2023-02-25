const express = require("express");
const route = express.Router();

const { addUser } = require("../Controller/allUsers");
route.post("/public", addUser);
module.exports = route;
