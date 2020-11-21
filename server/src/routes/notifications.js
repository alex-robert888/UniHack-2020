const express = require('express');
const Contractor = require('../models/contractor_model');
const Address = require('../models/address_model');
const Issue = require('../models/issue_model');
const Notification = require('../models/notification_model');

const generate_pid = require('../utility/generate_pId');

const router = express.Router();

router.get('/',
    (req, res, next) => {
        Notification.find()
            .then(notifications => res.json(notifications))
            .catch(err => next(err));
    }
);

router.get('/byreceiver/:receiver_pid',
    (req, res, next) => {
        Notification.find( {"receiver_pid": req.params.receiver_pid} )
            .then(notifications => res.json(notifications))
            .catch(err => next(err));
    }
);

module.exports = router;