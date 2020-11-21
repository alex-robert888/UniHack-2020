const express = require('express');
const Tenant = require('../models/tenant_model');
const Contractor = require('../models/contractor_model');
const Landlord = require('../models/landlord_model');
const Notification = require('../models/notification_model');

const generate_pid = require('../utility/generate_pId');
const personInDatabase = require('../utility/personInDatabase');

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



router.post('/add', function(req, res, next){
    if(personInDatabase(req.body.receiver_pid)){
        console.log("Inside");
        if(sender_pid == null || personInDatabase(req.body.sender_pid)){
            var exists = true;
            var new_pid;
            while(exists){
                new_pid = generate_pid("n");
                exists = (Notification.count( {"public_id" : new_pid} ) > 0);
            }

            const public_id = new_pid;
            const type = req.body.type;
            const sender_pid = req.body.sender_pid;
            const receiver_pid = req.body.receiver_pid;
            const description = req.body.description;
            const date_posted = Date.now();
            
            const newIssue = new Issue({
                "public_id": public_id,
                "type": type,
                "sender_pid": sender_pid,
                "receiver_pid": receiver_pid,
                "description": description,
                "date_posted": date_posted
            });

            newIssue.save()
                .then(() => res.json({
                    status: 'Issue added'
                    })  
                )
                .catch(err => next(err));
        }
        else{
            res.json("Sender pid not in database");
        }
    }
    else res.json("Invalid receiver pid");
});

module.exports = router;