const express = require('express');
const  Landlord = require('../models/landlord_model');

const router = express.Router();

router.get('/',
    (req, res, next) => {
        Landlord.find()
            .then(landlords => res.json(landlords))
            .catch(err => next(err));
    }
);

router.get('/getbypid/:pid',
    (req, res, next) => {
        Landlord.find({ "public_id": req.params.pid})
            .then(landlord => res.json(landlord))
            .catch(err => next(err));
    }
);

module.exports = router;