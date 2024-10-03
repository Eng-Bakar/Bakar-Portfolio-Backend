const mongoose = require('mongoose');
const HireMeModel = mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Hire', HireMeModel)