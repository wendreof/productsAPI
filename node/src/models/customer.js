'use strict'

const mongoose = require('mongoose');
//const schema = mongoose.Schema;

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }],

});

module.exports = mongoose.model('Customer', schema);