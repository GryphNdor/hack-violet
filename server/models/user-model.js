const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = mongoose.Schema({
    name: { type: String, required: true},
    contact: {type: String, required: true},
    longitude: { type: Number, required: true},
    latitude: { type: Number, required: true},
},);

module.exports = mongoose.model('users', User)