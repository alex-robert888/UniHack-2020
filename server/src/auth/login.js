
const express = require('express');
const Tenant = require('../models/tenant_model');

const router = express.Router();

router.get('/tenant', async function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    try{
        tenant = await Tenant.find({ "email" : email });
        if(!tenant[0]){
            next(new Error('Email not found'));
        }
        else{
            if (tenant[0].password == password){
                res.json({
                    status: 'success',
                    description: 'Password accepted'
                })
            }
            else {
                res.json({
                    status: 'failed',
                    description: 'Password rejected'
                })
            }
        }
    }
    catch(error) {next(error)};
});

router.get('/landlord', (req, res, next) => {
    res.json({
        status: 'Landlord login ✅'
    }) 
 });

 router.get('/contractor', (req, res, next) => {
    res.json({
        status: 'Contractor login ✅'
    }) 
 });

 module.exports = router;