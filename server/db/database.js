'use strict'

const mongoose = require('mongoose');
mongoose.Promise = Promise;

module.exports = (MONGODB_URL) => mongoose.connect(MONGODB_URL)
