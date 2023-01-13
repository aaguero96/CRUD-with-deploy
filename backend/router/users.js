const express = require('express');
const usersController = require('../controller/user');

const router = express.Router();

router.get('/', usersController.getAll);

module.exports = router;