const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    aadhar: {
        type: String,
        required: true
    },
    taxes_due: {
        type: Number
    },
    prev_sess_yield: {
        type: Number
    },
    cost_of_fert: {
        type: Number
    },
    cost_of_seeds: {
        type: Number
    },
    employees: {
        type: Number
    },
})

const user = mongoose.model('user', userSchema);
module.exports = user;