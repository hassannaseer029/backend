var express = require('express');
const { createCustomer } = require('../controller/customerController');
var router = express.Router();

/* GET users listing. */
router.get('/createCustomer', createCustomer)

module.exports = router;
 