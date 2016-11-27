'use strict'

const mongoose = require('mongoose')

const HTML5_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

module.exports = mongoose.model('User', {
  email: {
    type: String,
    lowercase: true,
    required: true,
    match: [HTML5_EMAIL_REGEX, 'Please enter a valid email address'],
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
  organizationIDs: {
    type: [String]
  },
  organizationalRoles: [
    {
      authorization: Number, //0: Administrator, 1: Instructor, 2: Student
      organizationID: String,
      subUID: String
    }
  ]
})
