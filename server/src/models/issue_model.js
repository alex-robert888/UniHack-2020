const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const issueSchema = new Schema(
    {
        status: {
            type: String,
            enum: ["open", "pending", "accepted", "solved", "closed"],
            required: true
        },
        address_id: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        date_open: {
            type: Date
        },
        date_accepted: {
            type: Date
        },
        date_solved: {
            type: Date
        },
        date_closed: {
            type: Date
        },
        applicants_list: {
            type: [String]
        },
        contractor: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue