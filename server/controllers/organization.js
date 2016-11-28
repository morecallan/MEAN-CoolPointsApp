'use strict';

const Organization = require('../db/models/organization');
const User = require('../db/models/user');

const createNewOrganization = (req, res) => {
  const name = req.body.name
  //Check to see if organization exists in the system with this name
  Organization.find({name: name})
  .then((results)=> {
    if (results.length != 0) {
      res.send({response: "This organization already exists."})
    } else {
      Organization.create({name: name}).then((organization) => {
      // User updated to be admin of created organization.
      User.findById("582493ac72d78d10fa8a02df").then((user) => {
        user.organizationIDs.push(organization._id)
        let userInfoObj = {};
        userInfoObj.authorization = 0;
        userInfoObj.organizationID = organization._id;
        user.userInfo.push(userInfoObj)
        user.save()
      })
      res.send({response: "Organization successfully created.", organization})
    })
  }
  })
}

module.exports = {createNewOrganization}
