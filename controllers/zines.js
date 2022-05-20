const Zine = require("../models/Zine");
const { StatusCodes } = require("http-status-codes");

// add a new zine to the database
// attribute createdBy to the logged in user
const createZine = async (req, res) => {
  req.body.createdBy = req.user.userId;

  try {
    const zine = await Zine.create({ ...req.body });
    res.status(StatusCodes.CREATED).json(zine);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send("please provide valid details");
  }
};

// get all zines of the logged in user
const getAllZines = (req, res) => {
  res.send("get all zines");
};

// get a zine by id
const getZineById = (req, res) => {
  res.send("get zine by id");
};

// delete a zine by id
// must be a zine created by logged in user
const deleteZineById = (req, res) => {
  res.send("delete zine by id");
};

// update zine info
// must be a zine by logged in user
const updateZineById = (req, res) => {
  res.send("update zine by id");
};

// create a series
// attribute series to logged in user
// zines added must be created by logged in user
const createSeries = (req, res) => {
  res.send("create new series");
};

// get a series of zines by seriesId
const getSeriesById = (req, res) => {
  res.send("get series by id");
};

// update series info based on id
// must be a series created by the user
const updateSeriesById = (req, res) => {
  res.send("update series by id");
};

// delete series based on id
// must be a series created by the user
const deleteSeriesById = (req, res) => {
  res.send("delete series by id");
};

module.exports = {
  createZine,
  getAllZines,
  getZineById,
  deleteZineById,
  updateZineById,
  createSeries,
  getSeriesById,
  updateSeriesById,
  deleteSeriesById,
};
