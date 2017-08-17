import React from "react";
import { renderToString } from "react-dom/server";
import Express from "express";
import { createStore } from "redux";
import { Provider } from "react-redux";

const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(path.resolve(__dirname, "../../", "build")));

app.get("/api/images", (req, res) => {
  axios
    .get(
      `https://139167162543316:MPfnC3smU0G-vHs-GC2YBZHz0Ww@api.cloudinary.com/v1_1/keezee/resources/image`
    )
    .then(response => {
      console.log("response ", response.data);
      res.send(response.data);
    })
    .catch(err => console.log(err));
});

app.get("*", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "../../", "build"));
  res.sendFile(path.resolve(__dirname, "../../", "build/index.html"));
});

app.listen(5000, () => {
  console.log("running on port 5000");
});
