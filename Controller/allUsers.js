const userModel = require('../Models/userSchema');

const addUser = async (req, res) => {
  try {
    let {location, date, porpuse} = await req.body;
    console.log(req.body);
    const newUser = new userModel({
      location,
      date,
      porpuse,
    });
    newUser
      .save()
      .then(response => {
        res
          .status(200)
          .send({result: response, message: 'data store suucessfully'});
      })
      .catch(error => {
        res
          .status(400)
          .send({result: error.message, message: 'data not store'});
      });
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports = {
  addUser,
};
