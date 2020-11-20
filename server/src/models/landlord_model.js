const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const landlordSchema = new Schema(
    {
        public_id: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: 3
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        fullname: {
            type: String
        },
        phone: {
            type: Number
        },
        country: {
            type: String
        },
        city: {
            type: String
        },
        date_of_birth: {
            type: String
        },
        gender:{
            type: String
        },
    },
    {
        timestamps: true
    }
);

const Landlord = mongoose.model('Landlord', landlordSchema);

module.exports = Landlord