const express = require('express');
const Contractor = require('../models/contractor_model');

const router = express.Router();

/*Return all contractors in the database
    Requires:
        In body:
            -
        In parameters:
            -
*/
router.get('/',
    (req, res, next) => {
        Contractor.find()
            .then(contractors => res.json(contractors))
            .catch(err => next(err));
    }
);

/*Return the contractor with the matching pid
    Requires:
        In body:
            -
        In parameters:
            pid: String
*/
router.get('/getbypid/:pid',
    (req, res, next) => {
        Contractor.find({ "public_id": req.params.pid})
            .then(contractor => res.json(contractor))
            .catch(err => next(err));
    }
);

router.put('/update/:pid', function (req, res, next) {
    var msg = "";
    Contractor.findOne({ public_id: req.params.pid })
    .then(contractor => {
        if(!contractor) res.json("Contractor not found");
        else{
            contractor.email = req.body.email;
            contractor.password = req.body.password;
            contractor.fullname = req.body.fullname
            contractor.phone = req.body.phone;
            contractor.country = req.body.country;
            contractor.city = req.body.city;
            contractor.date_of_birth = req.body.date_of_birth;
            contractor.gender = req.body.gender;
            
            contractor.save()
            .then(() => res.json('Contractor updated'))
            .catch(err => next(err));
            }
        })
    .catch(err => next(err));
})

module.exports = router;