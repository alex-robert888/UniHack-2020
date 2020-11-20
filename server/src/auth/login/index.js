
const express = require('express');

const router = express.Router();

router.get('/tenant', (req, res, next) => {
   res.json({
       status: 'Tenant login ✅'
   }) 
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