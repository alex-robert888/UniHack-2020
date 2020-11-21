const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applicantSchema = new Schema(
    {
        contractor_pid: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            min: 0,
            default: 0
        }
    }
)

const issueSchema = new Schema(
    {
        public_id: {
            type: String,
            required: true,
            unique: true
        },
        status: {
            type: String,
            enum: ["open", "pending", "accepted", "solved", "closed"],
            required: true,
            default: "open"
        },
        address_pid: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            min: 0,
            default: 0
        },
        date_opened: {
            type: Date,
            default: null
        },
        date_accepted: {
            type: Date,
            default: null
        },
        date_solved: {
            type: Date,
            default: null
        },
        date_closed: {
            type: Date, 
            default: null
        },
        applicants_list: {
            type: [applicantSchema]
        },
        contractor_pid: {
            type: String,
            default: null
        },
        bill_image:{
            type: String,
            default: null
        }
    },
    {
        timestamps: true
    }
);

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue