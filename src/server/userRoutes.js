const express = require("express");
const user = express.Router();
const bodyParser = require("body-parser");
const mongo = require("mongodb");
const assert = require("assert");
const session = require("express-session");
const mongoose = require("mongoose");

user.get("/:user", (req, res) => {
  res.send(req.session);
  console.log(":::::", req.session);
});

module.exports = user;
