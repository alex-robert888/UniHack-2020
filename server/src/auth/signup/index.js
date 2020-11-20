
const express = require('express');

const router = express.Router();

router.get('/tenant', (req, res, next) => {
   res.json({
       status: 'Tenant signup ✅'
   }) 
});

router.get('/landlord', (req, res, next) => {
    res.json({
        status: 'Landlord signup ✅'
    }) 
 });

 router.get('/contractor', (req, res, next) => {
    res.json({
        status: 'Contractor signup ✅'
    }) 
 });

 module.exports = router;