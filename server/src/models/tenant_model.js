const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tenantSchema = new Schema(
    {
        public_id: {
            type: String,
            required: true,
            unique: true
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
        address_id: {
            type: String,
            default: null
        }
    },
    {
        timestamps: true
    }
);

const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant