const express = require('express');
const Contractor = require('../models/contractor_model');
const Tenant = require('../models/tenant_model');

const router = express.Router();

/*Return all contractors in the database
    Requires:
        In body:
            -
        In parameters:
            -
*/
router.get('/',
    (req, res, next) => {
        Contractor.find()
            .then(contractors => res.json(contractors))
            .catch(err => next(err));
    }
);

/*Return the contractor with the matching pid
    Requires:
        In body:
            -
        In parameters:
            pid: String
*/
router.get('/getbypid/:pid',
    (req, res, next) => {
        Contractor.find({ "public_id": req.params.pid})
            .then(contractor => res.json(contractor))
            .catch(err => next(err));
    }
);

/*Update the contractor with the given pid
    Requires:
        In body:
            "email": String
            "password": String
            "fullname": String
            "phone": Number
            "country": String
            "city": String
            "date_of_birth": String
            "gender": String
        In parameters:
            pid: String
*/
router.put('/update/:pid', function (req, res, next) {
    var msg = "";
    Contractor.findOne({ public_id: req.params.pid })
    .then(contractor => {
        if(!contractor) res.json("Contractor not found");
        else{
            contractor.email = req.body.email;
            contractor.password = req.body.password;
            contractor.fullname = req.body.fullname
            contractor.phone = req.body.phone;
            contractor.country = req.body.country;
            contractor.city = req.body.city;
            contractor.date_of_birth = req.body.date_of_birth;
            contractor.gender = req.body.gender;
            
            contractor.save()
            .then(() => res.json('Contractor updated'))
            .catch(err => next(err));
            }
        })
    .catch(err => next(err));
})

/*Update the specializations of the contractor with the given pid
    Requires:
        In body:
            "specializations": [String]
        In parameters:
            pid: String
*/
router.put('/specializations/:pid', function (req, res, next) {
    var msg = "";
    Contractor.findOne({ public_id: req.params.pid })
    .then(contractor => {
        if(!contractor) res.json("Contractor not found");
        else{
            var s = [];
            for(i in req.body.specializations){
                s.push(req.body.specializations[i]);
                contractor.specializations = s;
            }
            
            contractor.save()
            .then(() => res.json('Contractor updated'))
            .catch(err => next(err));
            }
        })
    .catch(err => next(err));
})

/*Post a review for the contractor with the given pid
    Requires:
        In body:
            "stars": Number (1-5)
            "description": String
            "sender_tenant_pid": String (must be existing or null)
        In parameters:
            pid: String
*/
router.put('/review/:pid', function (req, res, next) {
    var msg = "";
    Contractor.findOne({ public_id: req.params.pid })
    .then(contractor => {
        if(!contractor) res.json("Contractor not found");
        else{
            if(req.body.sender_tenant_pid == null){
                contractor.review_list.push({ 
                    "stars": req.body.stars,
                    "description": req.body.description,
                    "date": Date.now(),
                    "sender_tenant_pid": null  
                });

                contractor.number_of_reviews++;

                for(i in  contractor.review_list){
                    sum += contractor.review_list[i].stars;
                }
                contractor.avg_stars = sum / contractor.number_of_reviews;

                contractor.save()
                .then(() => res.json('Review added'))
                .catch(err => next(err));
            }
            else{
                Tenant.findOne({ public_id: req.body.sender_tenant_pid })
                .then(tenant => {
                    if(!tenant) res.json('Tenant does not exist');
                    else{
                        var msg = "";
                        var exists;
                        for(i in contractor.review_list){
                            if(contractor.review_list[i].sender_tenant_pid == req.body.sender_tenant_pid) {
                                exists = true;
                                contractor.review_list[i].stars = req.body.stars;
                                contractor.review_list[i].description = req.body.description;
                                contractor.review_list[i].date = Date.now();
                                msg = "Review updated";
                                break;
                            }
                        }

                        if(!exists){
                            contractor.review_list.push({ 
                                "stars": req.body.stars,
                                "description": req.body.description,
                                "date": Date.now(),
                                "sender_tenant_pid": req.body.sender_tenant_pid 
                            });
                            contractor.number_of_reviews++;
                            msg = "Review added";
                        }

                        var sum = 0;
                        for(i in  contractor.review_list){
                            sum += contractor.review_list[i].stars;
                        }
                        contractor.avg_stars = sum / contractor.number_of_reviews;
                        
                        contractor.save()
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

module.exports = router;