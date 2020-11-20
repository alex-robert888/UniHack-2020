
const express = require('express');
const Tenant = require('../models/tenant_model');
const Landlord = require('../models/landlord_model');
const Contractor = require('../models/contractor_model');

const router = express.Router();

router.get('/tenant', async function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    try{
        tenant = await Tenant.find({ "email" : email });
        if(!tenant[0]){
            next(new Error('Error: Email not found'));
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

router.get('/landlord', async function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    try{
        landlord = await Landlord.find({ "email" : email });
        if(!landlord[0]){
            next(new Error('Error: Email not found'));
        }
        else{
            if (landlord[0].password == password){
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

 router.get('/contractor', async function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    try{
        contractor = await Contractor.find({ "email" : email });
        if(!contractor[0]){
            next(new Error('Error: Email not found'));
        }
        else{
            if (contractor[0].password == password){
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

 module.exports = router;