const express = require('express');
const  Landlord = require('../models/landlord_model');

const router = express.Router();

/*Return all landlords in the database
    Requires:
        In body:
            -
        In parameters:
            -
*/
router.get('/',
    (req, res, next) => {
        Landlord.find()
            .then(landlords => res.json(landlords))
            .catch(err => next(err));
    }
);

/*Return the landlord with the matching pid
    Requires:
        In body:
            -
        In parameters:
            pid: String
*/
router.get('/getbypid/:pid',
    (req, res, next) => {
        Landlord.find({ "public_id": req.params.pid})
            .then(landlord => res.json(landlord))
            .catch(err => next(err));
    }
);

/*Update the landlord with the given pid
    Requires:
        In body:
            "email": String
            "password": String
            "fullname": String
            "phone": Number
            "country": String
            "city": String
            "date_of_birth": String
            "gender": String
        In parameters:
            pid: String
*/
router.put('/update/:pid', function (req, res, next) {
    var msg = "";
    Landlord.findOne({ public_id: req.params.pid })
    .then(landlord => {
        if(!landlord) res.json("Landlord not found");
        else{
            landlord.email = req.body.email;
            landlord.password = req.body.password;
            landlord.fullname = req.body.fullname
            landlord.phone = req.body.phone;
            landlord.country = req.body.country;
            landlord.city = req.body.city;
            landlord.date_of_birth = req.body.date_of_birth;
            landlord.gender = req.body.gender;
            
            landlord.save()
            .then(() => res.json('Landlord updated'))
            .catch(err => next(err));
            }
        })
    .catch(err => next(err));
})

module.exports = router;