const express = require("express");
const server = express();
const axios = require("axios");
const cors = require("cors");
const apiRoutes = require("./apiRoutes");
const authRoutes = require("./authRoutes");
const mongo = require("mongodb");
const assert = require("assert");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require('mongoose');

// const url = "mongodb://localhost:27017/tester"

server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());

server.use("/api", apiRoutes);
server.use("/auth", authRoutes);
server.use(
  session({
    secret: "Communism Vici Kimono",
    resave: true,
    saveUninitialized: true
  })
);

server.listen(7000, () => {
  console.log("running on port 7000");
});
