const express = require('express');
const Contractor = require('../models/contractor_model');
const Address = require('../models/address_model');
const Issue = require('../models/issue_model');

const generate_pid = require('../utility/generate_pId');

const router = express.Router();

router.get('/',
    (req, res, next) => {
        Issue.find()
            .then(issues => res.json(issues))
            .catch(err => next(err));
    }
);

router.get('/byaddress/:address_pid',
    (req, res, next) => {
        Issue.find( {"address_pid": req.params.address_pid} )
            .then(issues => res.json(issues))
            .catch(err => next(err));
    }
);

router.post('/add', function(req, res, next){
    Address.findOne({public_id: req.body.address_id})
    .then(address => {
        if(address){
            var exists = true;
            var new_pid;
            while(exists){
                new_pid = generate_pid("i");
                exists = (Issue.count( {"public_id" : new_pid} ) > 0);
            }

            const public_id = new_pid;
            const address_id = req.body.address_id;
            const description = req.body.description;
            const price = req.body.price;
            const date_opened = Date.now();
            
            const newIssue = new Issue({
                "public_id": public_id,
                "address_id": address_id,
                "description": description,
                "price": price,
                "date_opened": date_opened
            });

            newIssue.save()
                .then(() => res.json({
                    status: 'Issue added'
                    })  
                )
                .catch(err => next(err));
        }
        else{
            res.json("Address does not exist");
        }
    })
    .catch(err => next(err));
});

router.delete('/delete/:pid',
    (req, res, next) => {
        Issue.deleteOne( {"public_id": req.params.pid} )
            .then(addresses => res.json('Issue deleted'))
            .catch(err => next(err));
    }
);

router.put('/apply/:pid', function(req, res, next){
    Issue.findOne({ "public_id": req.params.pid })
    .then(issue => {
            if(!issue){
                res.json("Issue does not exist");
            }
            else{
                Contractor.findOne({ "public_id": req.body.contractor_pid })
                .then(contractor => {
                    if(!contractor) res.json('Contractor does not exist');
                    else{
                        var found = false;
                        var msg = "";
                        for(i in issue.applicants_list){
                            if (issue.applicants_list[i].contractor_pid == req.body.contractor_pid){
                                console.log("Existing contractor");
                                issue.applicants_list[i].price = req.body.price;
                                found = true;
                                msg = "Contractor application updated";
                                break;
                            }
                        }

                        if(!found){
                            console.log("New contractor");
                            issue.applicants_list.push({
                                "contractor_pid": req.body.contractor_pid,
                                "price": req.body.price
                            });
                            msg = "Contractor application added";
                        }

                        issue.save()
                            .then(() => res.json(msg))
                            .catch(err => next(err));
                        }
                })
                .catch(err => next(err));
            }
    })
    .catch(err => next(err));
})

module.exports = router;