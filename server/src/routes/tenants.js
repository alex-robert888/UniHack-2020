const express = require('express');
const Tenant = require('../models/tenant_model');

const router = express.Router();

router.get('/',
    (req, res, next) => {
        Tenant.find()
            .then(tenants => res.json(tenants))
            .catch(err => next(err));
    }
);

router.get('/getbypid/:pid',
    (req, res, next) => {
        Tenant.find({ "public_id": req.params.pid})
            .then(tenant => res.json(tenant))
            .catch(err => next(err));
    }
);

module.exports = router;