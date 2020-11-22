
const express = require('express');
const Tenant = require('../models/tenant_model');
const Landlord = require('../models/landlord_model');
const Contractor = require('../models/contractor_model');
const bcrypt = require('bcrypt');

const router = express.Router();

const generate_pid = require('../utility/generate_pId');

/*Adds a new tenant to the database
    Requires:
        In body:
            "email": String (unique)
            "password": String
            "fullname": String
            "phone": Number
            "country": String
            "city": String
            "date_of_birth": String
            "gender": String
        In parameters:
            -
    Returns:
        "Tenant signup ✅" if signup successful
        Error message otherwise
*/
router.post('/tenant', async (req, res, next) => {
    var exists = true;
    var new_pid;
    while(exists){
        new_pid = generate_pid("t");
        exists = (Tenant.count( {"public_id" : new_pid} ) > 0);
    }

    const public_id = new_pid;
    const email = req.body.email;

    const password = await bcrypt.hash(req.body.password,12);

    const fullname = req.body.fullname;
    const phone = req.body.phone;
    const country = req.body.country;
    const city = req.body.city;
    const date_of_birth = req.body.date_of_birth;
    const gender = req.body.gender;
    const address_id = null;
    const newTenant = new Tenant({
        "public_id": public_id,
        "email": email,
        "password": password,
        "fullname": fullname,
        "phone": phone,
        "country": country,
        "city": city,
        "date_of_birth": date_of_birth,
        "gender": gender,
        "address_id": null
    });
    newTenant.save()
        .then(() => res.json({
            status: 'Tenant signup ✅'
            })  
        )
        .catch(err => next(err));
});

//Same as tenant
router.post('/landlord', async (req, res, next) => {
    var exists = true;
    var new_pid;
    while(exists){
        new_pid = generate_pid("l");
        exists = (Landlord.count( {"public_id" : new_pid} ) > 0);
    }

    const public_id = new_pid;
    const email = req.body.email;

    const password = await bcrypt.hash(req.body.password,12);

    const fullname = req.body.fullname;
    const phone = req.body.phone;
    const country = req.body.country;
    const city = req.body.city;
    const date_of_birth = req.body.date_of_birth;
    const gender = req.body.gender;
    const newLandlord = new Landlord({ 
        "public_id": public_id,
        "email": email,
        "password": password,
        "fullname": fullname, 
        "phone": phone,
        "country": country,
        "city": city,
        "date_of_birth": date_of_birth,
        "gender": gender,
    });
    newLandlord.save()
        .then(() => res.json({
            status: 'Landlord signup ✅'
            })  
        )
        .catch(err => next(err));
 });

 //Same as tenant
 router.post('/contractor', async (req, res, next) => {
    var exists = true;
    var new_pid;
    while(exists){
        new_pid = generate_pid("c");
        exists = (Contractor.count( {"public_id" : new_pid} ) > 0);
    }

    const public_id = new_pid;
    const email = req.body.email;

    const password = await bcrypt.hash(req.body.password,12);

    const fullname = req.body.fullname;
    const phone = req.body.phone;
    const country = req.body.country;
    const city = req.body.city;
    const date_of_birth = req.body.date_of_birth;
    const gender = req.body.gender;
    const newContractor = new Contractor({ 
        "public_id": public_id,
        "email": email,
        "password": password,
        "fullname": fullname,
        "phone": phone,
        "country": country,
        "city": city,
        "date_of_birth": date_of_birth,
        "gender": gender,
    });
    newContractor.save()
        .then(() => res.json({
            status: 'Contractor signup ✅'
            })  
        )
        .catch(err => next(err));
 });

 module.exports = router;