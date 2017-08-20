const express = require("express");
const auth = express.Router();
const bodyParser = require("body-parser");
const mongo = require("mongodb");
const assert = require("assert");

const url = "mongodb://localhost:27017/tester";

auth.get("/users", (req, res) => {
  let userArray = [];
  mongo.connect(url, (err, db) => {
    assert.equal(null, err);
    let users = db.collection("user-data").find();
    users.forEach(
      (el, err) => {
        assert.equal(null, err);
        userArray.push(el);
      },
      () => {
        db.close();
        res.send({
          userArray: userArray
        });
        console.log("USERRR DATA:", userArray);
      }
    );
  });
});

auth.post("/signup", (req, res) => {
  let user = {
    username: req.body.username,
    password: req.body.password
  };
  console.log("REQ>BODYYY:", req.body);
  mongo.connect(url, (err, db) => {
    assert.equal(null, err);
    db.collection("user-data").insertOne(user, err => {
      assert.equal(null, err);
      console.log("user inserted");
      db.close();
    });
  });
  res.redirect("http://localhost:5000/");
});

auth.post("/update/user", (req, res) => {
  res.send({
    message: "Signup Page!!"
  });
});

auth.get("/login", (req, res) => {
  res.send({
    message: "Login Page!!"
  });
});

module.exports = auth;
