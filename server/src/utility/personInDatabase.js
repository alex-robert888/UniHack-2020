const express = require('express');
const Tenant = require('../models/tenant_model');
const Contractor = require('../models/contractor_model');
const Landlord = require('../models/landlord_model');
const Notification = require('../models/notification_model');

function personInDatabase(pid){
    if(pid.match("^t.*")){
        Tenant.findOne({public_id: pid})
        .then(tenant => {
            if(tenant) return true;
        })
    }
    else if(pid.match("^l.*")){
        Landlord.findOne({public_id: pid})
        .then(landlord => {
            if(landlord) return true;
        })
    }
    else if(pid.match("^c.*")){
        Contractor.findOne({public_id: pid})
        .then(contractor => {
            if(contractor) return true;
        })
    }
    else return false;
}

module.exports = router;