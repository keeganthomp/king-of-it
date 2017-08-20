const express = require('express');
const auth = express.Router();


auth.get('/signup', (req, res)=>{
    res.send({
        message: "Signup Page!!"
    })
})

auth.get('/login', (req, res)=>{
    res.send({
        message: "Login Page!!"
    })
})



module.exports = auth;