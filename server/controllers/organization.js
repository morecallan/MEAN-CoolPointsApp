'use strict';

const User = require('../db/models/user');
const Organization = require('../db/models/organization');

const bcrypt = require('bcrypt');

const createNewOrganization = ({body: {name}}, res) => {
  //Check to see if user exists in the system with this email
  Organization.find({name: name})
  .then(()=>res.send({response: "This organization already exists."}))
  .catch(()=>{
  //Hashes users pawssword for storage.
      return Organization.create({name: organizationName})
    }).then((organization) => {
        res.send({response: "User successfully created.", organization})
    })
}

module.exports = {createNewOrganization}
