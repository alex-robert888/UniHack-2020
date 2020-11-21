const express = require('express');
const Tenant = require('../models/tenant_model');
const Contractor = require('../models/contractor_model');
const Landlord = require('../models/landlord_model');
const Notification = require('../models/notification_model');

function personInDatabase(pid){
    console.log(pid);
    if(pid.match("^t.*")){
        Tenant.findOne({public_id: pid})
        .then(tenant => {
            console.log("Checking tenants");
            if(tenant) {
                console.log("Found");
                return true;
            }
            else {
                console.log("Not found");
                return false;
            }
        })
        .catch(err => next(err));
    }
    else if(pid.match("^l.*")){
        Landlord.findOne({public_id: pid})
        .then(landlord => {
            if(landlord) return true;
            else return false;
        })
        .catch(err => next(err));
    }
    else if(pid.match("^c.*")){
        Contractor.findOne({public_id: pid})
        .then(contractor => {
            if(contractor) return true;
            else return false;
        })
        .catch(err => next(err));
    }
    else {
        console.log("Not in database");
        return false;
    }
}

module.exports = personInDatabase;