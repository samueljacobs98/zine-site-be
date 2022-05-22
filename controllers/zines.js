const Zine = require("../models/Zine");
const Series = require("../models/Series");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

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
const getAllZines = async (req, res) => {
  const zines = await Zine.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ zines, count: zines.length });
};

// get any zine by id
const getZineById = async (req, res) => {
  const {
    params: { id: zineId },
  } = req;

  const zine = await Zine.findOne({
    _id: zineId,
  });

  if (!zine) {
    throw new NotFoundError(`No job with id ${zineId}`);
  }

  res.status(StatusCodes.OK).json({ zine });
};

// delete a zine by id
// must be a zine created by logged in user
const deleteZineById = async (req, res) => {
  const {
    user: { userId },
    params: { id: zineId },
  } = req;

  try {
    await Zine.findByIdAndRemove({
      _id: zineId,
      createdBy: userId,
    });
    res.status(StatusCodes.OK).send("Zine deleted");
  } catch (error) {
    throw new NotFoundError(`No zine with given id ${zineId}`);
  }
};

// update zine info
// must be a zine by logged in user
const updateZineById = (req, res) => {
  res.send("update zine by id");
};

// create a series
// attribute series to logged in user
// zines added must be created by logged in user
const createSeries = async (req, res) => {
  req.body.createdBy = req.user.userId;

  try {
    const series = await Series.create({ ...req.body });
    res.status(StatusCodes.CREATED).json(series);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send("please provide valid details");
  }
};

// get a series of zines by seriesId
const getSeriesById = async (req, res) => {
  const {
    params: { id: seriesId },
  } = req;

  const series = await Series.findOne({
    _id: seriesId,
  });

  if (!series) {
    throw new NotFoundError(`No series with id ${seriesId}`);
  }

  res.status(StatusCodes.OK).json({ series });
};

// update series info based on id
// must be a series created by the user
const updateSeriesById = (req, res) => {
  res.send("update series by id");
};

// delete series based on id
// must be a series created by the user
const deleteSeriesById = async (req, res) => {
  const {
    user: { userId },
    params: { id: seriesId },
  } = req;

  try {
    await Series.findByIdAndRemove({
      _id: seriesId,
      createdBy: userId,
    });
    res.status(StatusCodes.OK).send("Series deleted");
  } catch (error) {
    throw new NotFoundError(`No series with given id ${seriesId}`);
  }
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
