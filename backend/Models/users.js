const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: String
    },
    gender: {
        required: true,
        type: String
    },
    createdAt:{
        required: true,
        type: Date
    }
})

module.exports = mongoose.model('users', UsersSchema)