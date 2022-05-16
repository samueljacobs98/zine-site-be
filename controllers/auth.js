const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({
      user: { firstName: user.firstName, username: user.username },
      token,
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send("please provide valid details");
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please provide username and password");
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw new UnauthenticatedError("Invalid Credentials");
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnauthenticatedError("Invalid Credentials");
    }
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({
      user: { firstName: user.firstName, username: user.username },
      token,
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send("please provide valid details");
  }
};

module.exports = {
  register,
  login,
};
