'use strict';

const Organization = require('../db/models/organization');

const createNewOrganization = ({body: {name}}, res) => {
  //Check to see if organization exists in the system with this name
  Organization.find({name: name})
  .then((results)=> {
    if (results.length != 0) {
      res.send({response: "This organization already exists."})
    } else {
      Organization.create({name: name}).then((organization) => {
      res.send({response: "Organization successfully created.", organization})
    })
  }
  })
}

module.exports = {createNewOrganization}
