const User = require("../models/userModel");

exports.getAllUsers = (req, res) => {
  const responseData = User.getAll();
  res.status(200);
  res.send(responseData);
};

exports.createNewUser = (req, res) => {
  const newUser = new User(
    req.body.email,
    req.body.name,
    req.body.surname,
    req.body.password,
    req.body.imageName
  );
  const responseData = newUser.save();
  res.status(200);
  res.send(responseData);
};

exports.editExistingUser = (req, res) => {
  const id = req.body.id;
  console.log("id", id);
  if (!id) {
    res.status(404).send();
    return;
  }
  const updateAnswer = User.updateById(
    id,
    req.body.email,
    req.body.name,
    req.body.surname,
    req.body.password,
    req.body.imageName
  );
  if (!updateAnswer) {
    res.status(404).send();
    return;
  }
  res.status(200);
  res.send(updateAnswer);
};

exports.deleteExistingUser = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send();
    return;
  }

  User.delete(id);
  res.status(200);
  res.send();
};
