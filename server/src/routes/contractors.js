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

module.exports = router;