'use strict';

const { Router } = require('express');
const router = Router();

const bcrypt = require('bcrypt');

const {createNewUser} = require('../controllers/user');
const {createNewOrganization} = require('../controllers/organization');

router.post("/api/createOrganization", createNewOrganization)
router.post("/api/createUser", createNewUser)

module.exports = router
