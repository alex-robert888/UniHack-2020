
const express = require('express');
const Tenant = require('../models/tenant_model');

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
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phone = req.body.phone;
    const country = req.body.country;
    const city = req.body.city;
    const address_id = null;
    const newTenant = new Tenant({ public_id, email, password, first_name, last_name, phone, country, city, address_id });
    newTenant.save()
        .then(() => res.json({
            status: 'Tenant signup ✅'
            })  
        )
        .catch(err => next(err));
});

router.post('/landlord', (req, res, next) => {
    res.json({
        status: 'Landlord signup ✅'
    }) 
 });

 router.post('/contractor', (req, res, next) => {
    res.json({
        status: 'Contractor signup ✅'
    }) 
 });

 module.exports = router;