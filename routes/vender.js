var express = require('express').Router();
const { createVender } = require('../controller/venderController');
// var router = express.Router() another way of calling router;

router.get('/createVender', createVender )
module.exports = router;
