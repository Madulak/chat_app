const express = require('express');
const router = express.Router();

const controllers = require('../controllers/profile');

router.get('/getusers', controllers.getAllUsers);

module.exports = router;
