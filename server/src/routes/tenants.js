const express = require('express');
const Tenant = require('../models/tenant_model');
const Address = require('../models/address_model');

const router = express.Router();

/*Return all tenants in the database
    Requires:
        In body:
            -
        In parameters:
            -
*/
router.get('/',
    (req, res, next) => {
        Tenant.find()
            .then(tenants => res.json(tenants))
            .catch(err => next(err));
    }
);

/*Return the tenant with the matching pid
    Requires:
        In body:
            -
        In parameters:
            pid: String
*/
router.get('/getbypid/:pid',
    (req, res, next) => {
        Tenant.findOne({ "public_id": req.params.pid})
            .then(tenant => res.json(tenant))
            .catch(err => next(err));
    }
);

router.get('/getbyaddress/:pid',
    (req, res, next) => {
        console.log(req.params.pid);
        Tenant.find({ "address_pid": req.params.pid})
            .then(tenant => res.json(tenant))
            .catch(err => next(err));
    }
);

/*Update the tenant with the matching pid
    Required:
        In body:
            "email": String
            "password": String
            "fullname": String
            "phone": String
            "country": String
            "city": String
            "date_of_birth": String
            "gender": String
            "address_pid": String
            (null is also accepted and  will replace previous data)
        In parameters:
            pid: String
*/
router.put('/update/:pid', function (req, res, next) {
    var msg = "";
    Tenant.findOne({ public_id: req.params.pid })
    .then(tenant => {
        if(!tenant) res.json("Tenant not found");
        else{
            tenant.email = req.body.email;
            tenant.password = req.body.password;
            tenant.fullname = req.body.fullname
            tenant.phone = req.body.phone;
            tenant.country = req.body.country;
            tenant.city = req.body.city;
            tenant.date_of_birth = req.body.date_of_birth;
            tenant.gender = req.body.gender;
            if(req.body.address_pid == null) {
                tenant.address_pid = null;
                console.log("Address null");
                tenant.save()
                        .then(() => res.json('Tenant updated'))
                        .catch(err => next(err));
            }
            else{
                console.log("Finding address");
                Address.findOne({public_id: req.body.address_pid})
                .then(address =>
                    {
                        if(address){
                            console.log("Address: " + address);
                            tenant.address_pid = req.body.address_pid;
                        }
                        else{
                            console.log("Address not found");
                        }

                        tenant.save()
                        .then(() => res.json('Tenant updated'))
                        .catch(err => next(err));
                        console.log(tenant);
                    }
                )
                .catch(err => next(err));
            }
        }
    })
    .catch(err => next(err));
})

/*Update the address of the tenant with the matching pid
    Required:
        In body:
            "address_pid": String
            (null is also accepted and  will replace previous data)
        In parameters:
            pid: String
*/
router.put('/change_address/:pid', function (req, res, next) {
    Tenant.findOne({ public_id: req.params.pid })
    .then(tenant => {
        if(!tenant) res.json("Tenant not found");
        else if(req.body.address_pid == null) {
            tenant.address_pid = null;
            console.log("Address null")
            tenant.save()
                    .then(() => res.json('Tenant address set to null'))
                    .catch(err => next(err));
        }
        else{
            console.log("Finding address");
            Address.findOne({public_id: req.body.address_pid})
            .then(address =>
                {
                    if(address){
                        console.log("Address: " + address);
                        tenant.address_pid = req.body.address_pid;
                        tenant.save()
                    .then(() => res.json('Tenant address updated'))
                    .catch(err => next(err));
                    }
                    else{
                        console.log("Address not found");
                        res.json("Address not found");
                    }

                    
                    console.log(tenant);
                }
            )
            .catch(err => next(err));
        }
    })
    .catch(err => next(err));
})    

module.exports = router;