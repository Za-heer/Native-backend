const userSchema = require('../Models/userSchema');

const allUsers = (req, res) => {
  const newUser = new userSchema({
    location: req.body.location,
    date: req.body.date,
    porpuse: req.body.porpuse,
  });
  newUser
    .save()
    .then(response => {
      res
        .status(200)
        .send({result: response, message: 'data store suucessfully'});
    })
    .catch(error => {
      res.status(404).send({result: error.message, message: 'data not store'});
    });
};
module.exports = allUsers;
