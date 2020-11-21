const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema = new Schema(
    {
        public_id: {
            type: String,
            required: true,
            unique: true
        },
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        building_number: {
            type: Number,
            required: true,
            min: 1
        },
        unit: {
            type: String
        },
        apartment: {
            type: Number,
            min: 0
        },
        landlord_pid:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Address = mongoose.model('Address', addressSchema);

module.exports = Address