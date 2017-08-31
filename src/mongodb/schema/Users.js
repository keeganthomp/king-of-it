const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String},
    points: {type: Number},
    challengesCompleted: {type: Number}
})

let User = mongoose.model('user', userSchema);
module.exports = User;