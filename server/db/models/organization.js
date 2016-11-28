'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Organization', {
  name: {
    type: String,
    required: true
  }
})
