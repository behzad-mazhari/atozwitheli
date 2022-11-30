const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    }

}, { timestamps: true });

const Register = mongoose.model('Register', registerSchema);

// console.log('in module');

module.exports = Register;