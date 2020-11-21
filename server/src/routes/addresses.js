const express = require('express');
const Address = require('../models/address_model');
const Landlord = require('../models/landlord_model');

const generate_pid = require('../utility/generate_pId');

const router = express.Router();

router.get('/',
    (req, res, next) => {
        Address.find()
            .then(addresses => res.json(addresses))
            .catch(err => next(err));
    }
);

router.get('/bylandlord/:landlord_pid',
    (req, res, next) => {
        Address.find( {"landlord_pid": req.params.landlord_pid} )
            .then(addresses => res.json(addresses))
            .catch(err => next(err));
    }
);

router.post('/add', async function(req, res, next){
    var exists = true;
    var new_pid;
    while(exists){
        new_pid = generate_pid("a");
        exists = (Address.count( {"public_id" : new_pid} ) > 0);
    }

    const public_id = new_pid;
    const country = req.body.country;
    const city = req.body.city;
    const street = req.body.street;
    const building_number = req.body.building_number;
    const unit = req.body.unit;
    const apartment = req.body.apartment;
    const landlord_pid = req.body.landlord_pid;

    await Landlord.count({ public_id: landlord_pid }, function (err, count) {
        if (err) next(err);
        if (!count){
            next(new Error("Landlord does not exist"));
            return;
        }
    });
    
    const newAddress = new Address({
        "public_id": public_id,
        "country": country,
        "city": city,
        "street": street,
        "building_number": building_number,
        "unit": unit,
        "apartment": apartment,
        "landlord_pid": landlord_pid
    });
    newAddress.save()
        .then(() => res.json({
            status: 'Address added'
            })  
        )
        .catch(err => next(err));
});

router.delete('/delete/:pid',
    (req, res, next) => {
        Address.deleteOne( {"public_id": req.params.pid} )
            .then(addresses => res.json('Address deleted'))
            .catch(err => next(err));
    }
);


module.exports = router;