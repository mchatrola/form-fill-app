const express = require('express');
const router = express.Router();
const { getFormDetails, getRawFormDetails } = require('../services/form')

router.get('/filterData', (req, res) => {
    return getFormDetails(req, res);
})

router.get('/raw', (req, res) => {
    return getRawFormDetails(req, res);
})

module.exports = router;