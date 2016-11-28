'use strict';

const User = require('../db/models/user');

const bcrypt = require('bcrypt');

const createNewUser = ({body: {email, password}}, res) => {
  //Check to see if user exists in the system with this email
  User.find({email: email})
  .then((reply)=> {
    if (reply.length !== 0) {
      res.send({response: "User with this email already exitsts."})
    } else {
      return new Promise((resolve, reject) => {
         bcrypt.hash(password, 15, (err, hash) => {
           if (err) {
             reject(err)
           } else {
             resolve(hash)
            }
          })
        }).then((hash) => {
          return User.create({email, password: hash})
        }).then((user) => {
          res.send({response: "User successfully created.", user})
        })
    }
  })
}

const loginUser = ({body: {email, password}}, res) => {
  //Check to see if user exists in the system with this email
  User.find({email: email})
  //TODO: Need to fill out the rest of login function
    //-set req.session
    //-return entire user object
}



module.exports = {createNewUser, loginUser}
