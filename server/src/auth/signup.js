
const express = require('express');
const Tenant = require('../models/tenant_model');
const Landlord = require('../models/landlord_model');
const Contractor = require('../models/contractor_model');

const router = express.Router();

const generate_pid = require('../utility/generate_pId');

router.post('/tenant', (req, res, next) => {
    var exists = true;
    var new_pid;
    while(exists){
        new_pid = generate_pid("t");
        exists = (Tenant.count( {"public_id" : new_pid} ) > 0);
    }

    const public_id = new_pid;
    const email = req.body.email;
    const password = req.body.password;
    const fullname = req.body.first_name;
    const phone = req.body.phone;
    const country = req.body.country;
    const city = req.body.city;
    const address_id = null;
    const newTenant = new Tenant({
        "public_id": public_id,
        "email": email,
        "password": password,
        "fullname": fullname,
        "phone": phone,
        "country": country,
        "city": city,
        "address_id": null
    });
    newTenant.save()
        .then(() => res.json({
            status: 'Tenant signup ✅'
            })  
        )
        .catch(err => next(err));
});

router.post('/landlord', (req, res, next) => {
    var exists = true;
    var new_pid;
    while(exists){
        new_pid = generate_pid("l");
        exists = (Landlord.count( {"public_id" : new_pid} ) > 0);
    }

    const public_id = new_pid;
    const email = req.body.email;
    const password = req.body.password;
    const fullname = req.body.fullname;
    const phone = req.body.phone;
    const country = req.body.country;
    const city = req.body.city;
    const newLandlord = new Landlord({ 
        "public_id": public_id,
        "email": email,
        "password": password,
        "fullname": fullname, 
        "phone": phone,
        "country": country,
        "city": city
    });
    newLandlord.save()
        .then(() => res.json({
            status: 'Landlord signup ✅'
            })  
        )
        .catch(err => next(err));
 });

 router.post('/contractor', (req, res, next) => {
    var exists = true;
    var new_pid;
    while(exists){
        new_pid = generate_pid("c");
        exists = (Contractor.count( {"public_id" : new_pid} ) > 0);
    }

    const public_id = new_pid;
    const email = req.body.email;
    const password = req.body.password;
    const fullname = req.body.first_name;
    const phone = req.body.phone;
    const country = req.body.country;
    const city = req.body.city;

    const newContractor = new Contractor({ 
        "public_id": public_id,
        "email": email,
        "password": password,
        "fullname": fullname,
        "phone": phone,
        "country": country,
        "city": city,
    });
    newContractor.save()
        .then(() => res.json({
            status: 'Contractor signup ✅'
            })  
        )
        .catch(err => next(err));
 });

 module.exports = router;