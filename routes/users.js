var express = require('express');
const { createUser } = require('../controller/userController');
var router = express.Router();

/* GET users listing. */
router.get('/createUser',createUser);

module.exports = router;
