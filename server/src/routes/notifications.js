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

router.get('/byreceiver/:receiver_pid/:nr',
    (req, res, next) => {
        Notification.find( {"receiver_pid": req.params.receiver_pid} ).sort( 'field -date_posted' )
            .then(notifications => {
                if(req.params.nr == 0) res.json(notifications);
                else if (req.params.nr > 0){
                    var v = [];
                    for(var i = 0; i < req.params.nr; i++){
                        v.push(notifications[i]);
                    }
                    res.json(v);
                }
            })
            .catch(err => next(err));
    }
);

router.post('/add', async function(req, res, next){
    try{
        if(await personInDatabase(req.body.receiver_pid)){
            console.log("Inside");
            if(req.body.sender_pid == null || await personInDatabase(req.body.sender_pid)){
                console.log("Inside2");
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
                
                const newNotification = new Notification({
                    "public_id": public_id,
                    "type": type,
                    "sender_pid": sender_pid,
                    "receiver_pid": receiver_pid,
                    "description": description,
                    "date_posted": date_posted
                });

                newNotification.save()
                    .then(() => res.json({
                        status: 'Notification added'
                        })  
                    )
                    .catch(err => next(err));
            }
            else{
                res.json("Sender pid not in database");
            }
        }
        else res.json("Invalid receiver pid");
    }
    catch(error) { next(error); }
});

router.put('/mark/:pid', function (req, res, next) {
    var msg = "";
    Notification.findOne({ public_id: req.params.pid })
    .then(notification => {
        if(!notification) res.json("Notification not found");
        else{
            notification.seen = true;
            
            notification.save()
            .then(() => res.json('Notification updated'))
            .catch(err => next(err));
            }
        })
    .catch(err => next(err));
})

module.exports = router;