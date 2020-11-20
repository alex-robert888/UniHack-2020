const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        stars: {
            type: Number,
            min: 1,
            max: 5
        },
        description: {
            type: String
        },
        date: {
            type: Date
        },
        sender_tenant_id: {
            type: String
        }
    }
)

const incomeSchema = new Schema(
    {
        year: {
            type: String,
        },
        month:{
            type: String
        },
        value: {
            type: Number,
            default: 0,
            min: 0
        }
    }
)

const contractorSchema = new Schema(
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
        specializations: {
            type: [String]
        },
        description: {
            type: String
        },
        avg_stars: {
            type: Number
        },
        number_of_reviews: {
            type: Number,
            default: 0
        },
        review_list: {
            type: [reviewSchema]
        },
        income_list: {
            type: [incomeSchema]
        }
    },
    {
        timestamps: true
    }
);

const Contractor = mongoose.model('Contractor', contractorSchema);

module.exports = Contractor