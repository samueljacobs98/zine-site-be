const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

// get a specified user
// for other user's profile page
const getUserById = async (req, res) => {
  const {
    params: { id: userId },
  } = req;

  try {
    const { _id, firstName, lastName, username, email } = await User.findOne({
      _id: userId,
    });

    res
      .status(StatusCodes.OK)
      .json({ _id, firstName, lastName, username, email });
  } catch (error) {
    throw new NotFoundError(`No user with id ${userId}`);
  }
};

// edit the logged in user
const updateUser = (req, res) => {
  res.send("update user");
};

// delete the logged in user
const deleteUser = async (req, res) => {
  const {
    user: { userId },
  } = req;

  try {
    await User.findByIdAndRemove({
      _id: userId,
    });
    res.status(StatusCodes.OK).send("Account deleted");
  } catch (error) {
    throw new NotFoundError(`No user with given id ${zineId}`);
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getUserById,
};
