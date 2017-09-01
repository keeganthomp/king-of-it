const express = require("express");
const server = express();
const axios = require("axios");
const cors = require("cors");
const apiRoutes = require("./apiRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const mongo = require("mongodb");
const assert = require("assert");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());

server.use(cookieParser());
server.use(
  session({
    resave: true,
    secret: "123456",
    saveUninitialized: true
  })
);
server.use("/api", apiRoutes);
server.use("/auth", authRoutes);
server.use("/user", userRoutes);

server.listen(7000, () => {
  console.log("API running on port 7000");
});
