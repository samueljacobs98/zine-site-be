// const User = require("../models/User");
// const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  res.send("register route working");
};

const login = async (req, res) => {
  res.send("login route working");
};

module.exports = { register, login };
