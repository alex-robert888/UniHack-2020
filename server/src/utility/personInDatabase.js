const express = require('express');
const Tenant = require('../models/tenant_model');
const Contractor = require('../models/contractor_model');
const Landlord = require('../models/landlord_model');
const Notification = require('../models/notification_model');

//Check if the given pid of a tenant, contractor or landlord appears in the database
async function personInDatabase(pid){
    console.log(pid);
    try{
    if(pid.match("^t.*")){
        tenant = await Tenant.findOne({public_id: pid});
        console.log("Checking tenants");
        if(tenant) {
            console.log("Found");
            return true;
        }
        else {
            console.log("Not found");
            return false;
        }
    }
    
    else if(pid.match("^l.*")){
        landlord = await Landlord.findOne({public_id: pid});
        console.log("Checking landlords");
        if(landlord) {
            console.log("Found");
            return true;
        }
        else {
            console.log("Not found");
            return false;
        }
    }
    else if(pid.match("^c.*")){
        contractor = await Contractor.findOne({public_id: pid});
        console.log("Checking contractors");
        if(contractor) {
            console.log("Found");
            return true;
        }
        else {
            console.log("Not found");
            return false;
        }
    }
    else {
        console.log("Not in database");
        return false;
    }
    }
    catch(error) { next(error); }
}

module.exports = personInDatabase;