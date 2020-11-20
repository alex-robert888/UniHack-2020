const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notificationSchema = new Schema(
    {
        type: {
            type: String,
            enum: ["client_accepted", "landlord_accepted", "invitation"],
            required: true
        },
        sender_pid: {
            type: String,
            required: true
        },
        receiver_pid: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        seen: {
            type: Boolean,
            required: true
        },
        date_posted: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification