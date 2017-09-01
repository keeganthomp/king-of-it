const express = require("express");
const auth = express.Router();
const bodyParser = require("body-parser");
const mongo = require("mongodb");
const assert = require("assert");
const session = require("express-session");
const mongoose = require("mongoose");

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
    password: req.body.password,
    points: 0,
    challenges_completed: 0
  };
  console.log("REQ BODYYY:", req.body);
  mongo.connect(url, (err, db) => {
    assert.equal(null, err);
    db.collection("user-data").insertOne(user, err => {
      assert.equal(null, err);
      db.close();
    });
  });
  res.redirect("http://localhost:5000/auth/login");
});

auth.post("/login", (req, res) => {
  let user = {
    username: req.body.loginUsername,
    password: req.body.loginPassword
  };
  mongo.connect(url, (err, db) => {
    assert.equal(null, err);
    db.collection("user-data").findOne({
      username: user.username,
      password: user.password
    }, (err, user) => {
      if (!user) {
        res.send("DOESNT EXISTTT");
      } else if (err) {
        res.send(err);
      }
      req.session.user = user;
      req.session.balls = "balls";
      req.session.save();
      console.log(`Hi ${req.session.user.username}`);
      console.log("REQ SESSSIONN", req.session);
      res.redirect(
        `http://localhost:5000/profile/${req.session.user.username}`
      );
    });
  });
});

module.exports = auth;
