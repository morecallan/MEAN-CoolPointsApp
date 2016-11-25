'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Organization', {
  organizationID: {
    type: String,
    required: true,
    index: { unique: true },
  },
  name: {
    type: String,
    required: true,
  },
})
