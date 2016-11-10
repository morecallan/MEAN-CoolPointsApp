'use strict';

const { Router } = require('express');
const router = Router();

const bcrypt = require('bcrypt');

const {createNewUser} = require('../controllers/user');

router.post("/api/createUser", createNewUser)

module.exports = router
