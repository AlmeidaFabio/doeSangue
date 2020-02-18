const mongoose = require('mongoose')

const donorsSchema = new mongoose.Schema({
    name:String,
    email:String,
    blood:String
})

module.exports = mongoose.model('Donors', donorsSchema)