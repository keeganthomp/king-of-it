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
        console.log("USER DATA:", userArray);
      }
    );
  });
});

auth.post("/signup", (req, res) => {
  let user = {
    username: req.body.username,
    password: req.body.password
  };
  console.log("REQ BODYYY:", req.body);
  mongo.connect(url, (err, db) => {
    assert.equal(null, err);
    db.collection("user-data").insertOne(user, err => {
      assert.equal(null, err);
      console.log("user inserted");
      console.log("REQ SESSIONNN::::::", req.session);
      db.close();
    });
  });
  res.redirect("http://localhost:5000/");
});

auth.post("/login", (req, res) => {
  let user = {
    username: req.body.loginUsername,
    password: req.body.loginPassword
  };
  console.log("LOGIN REQ BODYYY:", req.body);
  mongo.connect(url, (err, db) => {
    assert.equal(null, err);
    db.collection("user-data").findOne({
      username: user.username,
      password: user.password
    }, (err, user) => {
      if (!user) {
        res.send("DOESNT EXISTTT");
      } else {
        res.send(`HI, ${user.username}`);
      }
    });
  });
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
