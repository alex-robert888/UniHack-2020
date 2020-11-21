const express = require('express');
const Contractor = require('../models/contractor_model');
const Address = require('../models/address_model');
const Issue = require('../models/issue_model');

const generate_pid = require('../utility/generate_pId');

const router = express.Router();

/*Return all issues in the database
    Requires:
        In body:
            -
        In parameters:
            -
*/
router.get('/',
    (req, res, next) => {
        Issue.find()
            .then(issues => res.json(issues))
            .catch(err => next(err));
    }
);

/*Return the issues of the given address (by pid)
    Requires:
        In body:
            -
        In parameters:
            address_pid: String
*/
router.get('/byaddress/:address_pid',
    (req, res, next) => {
        Issue.find( {"address_pid": req.params.address_pid} )
            .then(issues => res.json(issues))
            .catch(err => next(err));
    }
);

/*Add a new issue to the database
    Requires:
        In body:
            "address_pid": String (must be existing)
            "description": String
            "title": String
        In parameters:
            -
*/
router.post('/add', function(req, res, next){
    Address.findOne({public_id: req.body.address_pid})
    .then(address => {
        if(address){
            var exists = true;
            var new_pid;
            while(exists){
                new_pid = generate_pid("i");
                exists = (Issue.count( {"public_id" : new_pid} ) > 0);
            }

            const public_id = new_pid;
            const address_pid = req.body.address_pid;
            const title = req.body.title;
            const description = req.body.description;
            const date_opened = Date.now();
            
            const newIssue = new Issue({
                "public_id": public_id,
                "address_pid": address_pid,
                "description": description,
                "title": title,
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

/*Deletes the given issue (by pid)
    Requires:
        In body:
            -
        In parameters:
            pid: String
*/
router.delete('/delete/:pid',
    (req, res, next) => {
        Issue.deleteOne( {"public_id": req.params.pid} )
            .then(addresses => res.json('Issue deleted'))
            .catch(err => next(err));
    }
);

/*Add a new applicant to the list of applicants of the issue (by pid). Current status must be open or pending
    Requires:
        In body:
            "contractor_pid": String (must be existing)
            "price": Number
        In parameters:
            pid: String
*/
router.put('/apply/:pid', function(req, res, next){
    Issue.findOne({ "public_id": req.params.pid })
    .then(issue => {
            if(!issue){
                res.json("Issue does not exist");
            }
            else{
                if(!(issue.status == "open" || issue.status == "pending")) res.json('Issue status not open or pending');
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
            }
    })
    .catch(err => next(err));
})

/*Propose a new applicant to be accepted from hte list of applicants of the issue (by pid). Current status must be open
    Requires:
        In body:
            "contractor_pid": String (must be existing)
            "price": Number
        In parameters:
            pid: String
*/
router.put('/propose/:pid', function(req, res, next){
    Issue.findOne({ "public_id": req.params.pid })
    .then(issue => {
            if(!issue){
                res.json("Issue does not exist");
            }
            else{
                if(!(issue.status == "open")) res.json('Issue status not open');
                else{
                    Contractor.findOne({ "public_id": req.body.contractor_pid })
                    .then(contractor => {
                        if(!contractor) res.json('Contractor does not exist');
                        else{
                            var found = false;
                            var msg = "";
                            for(i in issue.applicants_list){
                                if (issue.applicants_list[i].contractor_pid == req.body.contractor_pid){
                                    console.log("Existing contractor: " + contractor._id);
                                    found = true;
                                    msg = "Contractor proposed";
                                    issue.status = "pending";
                                    issue.contractor_pid = req.body.contractor_pid;
                                    issue.price = issue.applicants_list[i].price;
                                    issue.applicants_list.pull({ _id: issue.applicants_list[i]._id });
                                    break;
                                }
                            }

                            if(!found){
                                console.log("Contractor not found");
                                msg = "Contractor not in the list of applicants";
                            }

                            issue.save()
                                .then(() => res.json(msg))
                                .catch(err => next(err));
                            }
                    })
                    .catch(err => next(err));
                }
            }
    })
    .catch(err => next(err));
})

/*Accepts a proposed application. Sets status to accepted.
Current status must be pending
    Requires:
        In body:
            -
        In parameters:
            pid: String
*/
router.put('/accept/:pid', function(req, res, next){
    Issue.findOne({ "public_id": req.params.pid })
    .then(issue => {
            if(!issue){
                res.json("Issue does not exist");
            }
            else{
                if(!(issue.status == "pending")) res.json('Issue status not pending');
                else{
                    Contractor.findOne({ "public_id": issue.contractor_pid })
                    .then(contractor => {
                        if(!contractor){
                             res.json('Contractor no longer exists');
                             issue.contractor = null;
                             issue.price = 0;
                        }
                        else{
                            var found = false;
                            var msg = "";
                            if (issue.contractor_pid != null){
                                console.log("Existing contractor");
                                found = true;
                                msg = "Contractor application accepted";
                                issue.status = "accepted";
                                issue.price = issue.applicants_list[i].price;
                                issue.date_accepted = Date.now()
                                issue.applicants_list = [];
                            }
                            else{
                                issue.price = 0;
                                msg = "Contractor pid is null (for some reason)";
                            }

                            if(!found){
                                console.log("Contractor not found");
                                msg = "Contractor not in the list of applicants";
                            }

                            issue.save()
                                .then(() => res.json(msg))
                                .catch(err => next(err));
                            }
                    })
                    .catch(err => next(err));
                }
            }
    })
    .catch(err => next(err));
})

/*Rejects a proposed application. Sets status to open.
Current status must be pending
    Requires:
        In body:
            -
        In parameters:
            pid: String
*/
router.put('/reject/:pid', function(req, res, next){
    Issue.findOne({ "public_id": req.params.pid })
    .then(issue => {
        if(!issue){
            res.json("Issue does not exist");
        }
        else{
            if(!(issue.status == "pending")) res.json('Issue status not pending');
            else{
                issue.contractor_pid = null;
                issue.status = "open";
                issue.price = 0;
                issue.save()
                    .then(() => res.json("Applicant rejected"))
                    .catch(err => next(err));
                }
            }
        })
    .catch(err => next(err));
})

/*Sets the status of the issue (by pid) to solved. Current status must be accepted
    Requires:
        In body:
            -
        In parameters:
            pid: String
*/
router.put('/solve/:pid', function(req, res, next){
    Issue.findOne({ "public_id": req.params.pid })
    .then(issue => {
            if(!issue){
                res.json("Issue does not exist");
            }
            else{
                if(!(issue.status == "accepted")) res.json('Issue status not accepted');
                else{
                    issue.status = "solved";
                    issue.date_solved = Date.now();
                    issue.save()
                        .then(() => res.json("Issue solved"))
                        .catch(err => next(err));
                }
            }
        }
    )
    .catch(err => next(err));
})

/*Sets the status of the issue (by pid) to closed. Current status must be solved
    Requires:
        In body:
            -
        In parameters:
            pid: String
*/
router.put('/close/:pid', function(req, res, next){
    Issue.findOne({ "public_id": req.params.pid })
    .then(issue => {
            if(!issue){
                res.json("Issue does not exist");
            }
            else{
                if(!(issue.status == "solved")) res.json('Issue status not solved');
                else{
                    issue.status = "closed";
                    issue.date_closed = Date.now();
                    issue.save()
                        .then(() => res.json("Issue closed"))
                        .catch(err => next(err));
                }
            }
        }
    )
    .catch(err => next(err));
})

module.exports = router;